import {Injectable, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
    DocumentChangeAction
} from "@angular/fire/firestore";
import {User} from "../../model/User";
import {AngularFireAuth} from "angularfire2/auth";
import {auth} from "firebase/app";

@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit {

    currentUser: User;
    userName: string;
    userArray: User[];
    duplicate: boolean;


    private userRef: AngularFirestoreDocument<User>;
    private usersRef: AngularFirestoreCollection<User>;


    constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {
        this.usersRef = this.db.collection<User>(`users`);
    }

    ngOnInit(): void {

    }

    googleSignIn() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
            .then(data => {
                this.currentUser = {
                    name: data.user.displayName,
                    email: data.user.email,
                    cart: [],
                };
                console.log(data);
                this.saveUser(this.currentUser);
            });
        console.log("saved user to fb");
    }

    newUser(email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(data => {
                this.currentUser = {
                    name: this.userName,
                    email: data.user.email,
                    cart: [],
                    password: password
                };
                console.log("password" + password);
                console.log("display name" + this.currentUser.name);
                if(this.checkDuplicateUser(this.currentUser.email)){
                    this.saveUser(this.currentUser);
                }
            });
    }

    emailSignIn(email, password){
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(data => {
            this.currentUser = {
                name: data.user.displayName,
                email: data.user.email,
                cart: [],
            };
        });
        console.log("email sign in");
    }

    logout() {
        this.afAuth.auth.signOut()
            .then(data => {
                this.currentUser = null;
            });
    }

    getUsersObservable(): Observable<User[]> {
        return this.usersRef.snapshotChanges()
            .pipe(
                map((items: DocumentChangeAction<User>[]): User[] => {
                    return items.map((item: DocumentChangeAction<User>): User => {
                        return {
                            name: item.payload.doc.data().name,
                            email: item.payload.doc.data().email,
                            cart: item.payload.doc.data().cart,
                            password: item.payload.doc.data().password,
                        } as User;
                    });
                })
            );

    }

  saveUser(user: User) {
      this.usersRef.doc(this.afAuth.auth.currentUser.email).set(this.currentUser);
  }

  // editUser(userId: string, user: any) {
  //   return this.usersRef.doc(userId).update(user)
  //       .then(_ => console.log('Success on update'))
  //       .catch(error => console.log('update', error));
  // }

  removeUser(name: string) {
    return this.usersRef.doc(name).delete()
        .then(_ => console.log('Success on remove'))
        .catch(error => console.log('remove', error));
  }

  checkDuplicateUser(email): boolean {
        this.getUsersObservable().subscribe( data => {
            this.userArray = data;
            this.userArray.forEach( user =>{
               return user.email === email;
            });
        })
    }
}

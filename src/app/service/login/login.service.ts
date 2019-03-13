import {Injectable, OnInit} from '@angular/core';

import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction
} from "@angular/fire/firestore";
import {User} from "../../model/User";
import {AngularFireAuth} from "angularfire2/auth";
import { auth } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  currentUser: User;


  private userRef: AngularFirestoreDocument<User>;
  private usersRef: AngularFirestoreCollection<User>;


  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.usersRef = this.db.collection<User>(`users`);
  }
  ngOnInit(): void {

  }

  googleSignIn(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        .then(data =>{
          this.currentUser ={
            name: data.user.displayName,
            email: data.user.email,
            cart: [],
          };
          console.log(data)
        });
    this.saveUser(this.currentUser);
    console.log("saved user to fb");
    }

    emailSignIn(name, email, password){
    console.log(email);
    console.log(password);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then( data =>{
          console.log(data);
            this.currentUser = {
                name: name,
                email: data.user.email,
                cart: [],
                password: password
            }
            console.log("password" + password);
            console.log("display name" + this.currentUser.name);
        });
    this.saveUser(this.currentUser);
    }

  logout() {
      this.afAuth.auth.signOut()
          .then(data => {
              this.currentUser = null;
          });
  }

  getUsersObservable(): Observable<User[]>{
    return this.usersRef.snapshotChanges()
        .pipe(
            map((items: DocumentChangeAction<User>[]): User[] => {
              return items.map((item: DocumentChangeAction<User>): User => {
                return {
                  name: item.payload.doc.data().name,
                  email: item.payload.doc.data().email,
                  cart: item.payload.doc.data().cart,
                  password: item.payload.doc.data().password,
                }as User;
              });
            })
        );

  }

  saveUser(user: User) {
    return this.usersRef.add(user)
        .then(_ => console.log(`Save user ${user.name}`));
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
}

import {Injectable, OnInit} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
    DocumentChangeAction
} from '@angular/fire/firestore';
import {User} from '../../model/User';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase/app';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit {

    currentUser: User;
    userName: string;
    userArray: User[];
    isLoggedIn: boolean = false;

    private userRef: AngularFirestoreDocument<User>;
    private usersRef: AngularFirestoreCollection<User>;


    constructor(private db: AngularFirestore, public afAuth: AngularFireAuth, private router: Router) {
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
                this.router.navigate(['/landing']);
            }).catch(error => {
            console.log('Error logging in...', error);
            this.errorMessage(error);
        })
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
                this.saveUser(this.currentUser);
                this.isLoggedIn = true;
                this.router.navigate(['/landing']);
            }).catch(error => {
            console.log('Error logging in...', error);
            this.errorMessage(error);
        });
    }

    emailSignIn(email, password){
        let userName = '';
        this.usersRef.doc<User>(email).ref.onSnapshot(doc => {
            userName = doc.data().name;
        });
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(data => {
            this.currentUser = {
                name: userName,
                email: data.user.email,
                cart: [],
            };
            this.router.navigate(['/landing']);
        }).catch(error => {
            console.log('Error logging in...', error);
            this.errorMessage(error);
        });
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

  removeUser(email: string) {
    return this.usersRef.doc(email).delete()
        .then(_ => console.log('Success on remove'))
        .catch(error => console.log('remove', error));
  }
  errorMessage(error) {
      return alert(error.message);
  }

  authed() {
        return this.afAuth.authState.pipe(
            map(res => res ? true : false)
        )
  }

}

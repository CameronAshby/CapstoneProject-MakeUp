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
import {Router} from '@angular/router';
import {Product} from '../../model/product';

@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit {

    currentUser: User;
    userName: string;
    isLoggedIn: boolean = false;
    userCart;
    userPurchaseHistory;

    private usersRef: AngularFirestoreCollection<User>;

    constructor(private db: AngularFirestore, public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
        this.usersRef = this.db.collection<User>(`users`);
    }

    ngOnInit(): void {
    }

    googleSignIn() {
        console.log('called Sign in');
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
            .then(info => {
                this.getUsersObservable().subscribe((data) => {
                    this.currentUser = data.filter((user) => user.email === info.user.email)[0];
                    this.isLoggedIn = true;
                    if(window.location.href.split('/')[3] === 'welcome-page') {
                        this.router.navigate(['/landing']);
                    }});
            }).catch(error => {
            console.log('Error logging in...', error);
            this.errorMessage(error);
        });
    }

    newUser(email, password) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(data => {
                this.currentUser = {
                    name: this.userName,
                    email: data.user.email,
                    password: password,
                    cart: [],
                    purchaseHistory: []
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
            this.userCart = doc.data().cart;
           this. userPurchaseHistory = doc.data().purchaseHistory;

        });
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(info => {
                this.getUsersObservable().subscribe((data) => {
                    console.log(data);
                    this.currentUser = data.filter((user) => user.email === info.user.email)[0];
                    console.log(this.currentUser);
                    this.isLoggedIn = true;
                    if(window.location.href.split('/')[3] === 'welcome-page') {
                        this.router.navigate(['/landing']);
                    }
                });
        }).catch(error => {
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
                            cart: (item.payload.doc.data().cart ? item.payload.doc.data().cart : []),
                            purchaseHistory: (item.payload.doc.data().purchaseHistory ? item.payload.doc.data().purchaseHistory : []),
                            password: item.payload.doc.data().password,
                        } as User;
                    });
                })
            );

    }

  saveUser(user: User) {
      this.usersRef.doc(this.afAuth.auth.currentUser.email).set(this.currentUser);
  }

  errorMessage(error) {
      return alert(error.message);
  }
}

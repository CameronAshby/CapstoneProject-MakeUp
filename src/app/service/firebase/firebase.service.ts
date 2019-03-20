import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction
} from 'angularfire2/firestore';
import {LoginService} from '../login/login.service';
import {User} from '../../model/User';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private cartRef: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private loginService: LoginService, public apiService: ApiService) {
    this.cartRef = this.afs.collection<User>(`users`);
  }

  getCartItems() {
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).ref.onSnapshot(doc => {
       console.log(this.loginService.currentUser = doc.data() as User);
       this.apiService.cartArray = (doc.data() as User).cart;
    });
  }
  getCartObservable(): Observable<User[]> {
    return this.cartRef.snapshotChanges()
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
}

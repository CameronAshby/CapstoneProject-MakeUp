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
import {Product} from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  cartArray: Product[] = [];

  private cartRef: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private loginService: LoginService) {
    this.cartRef = this.afs.collection<User>(`users`);
  }

  getCartItems() {
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).ref.onSnapshot(doc => {
       console.log(this.loginService.currentUser = doc.data() as User);
       this.cartArray = (doc.data() as User).cart;
    });
  }
  addToCart(item){
    this.cartArray.push(item);
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).set({
      cart: this.cartArray,
      email: this.loginService.currentUser.email,
      name: this.loginService.currentUser.name,
    })
  }
}

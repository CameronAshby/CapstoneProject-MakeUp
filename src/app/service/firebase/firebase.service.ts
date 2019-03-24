import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';
import {LoginService} from '../login/login.service';
import {User} from '../../model/User';
import {Product} from '../../model/product';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  cartArray = [];

  private cartRef: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private loginService: LoginService, public apiService:ApiService) {
    this.cartRef = this.afs.collection<User>(`users`);
  }

  getFirebaseCart() {
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).ref.onSnapshot(doc => {
      this.cartArray = (doc.data() as User).cart;
    });
  }

  addToCart(item){
    let found = false;
    if(this.cartArray.length !== 0) {
      this.cartArray.forEach((product, index) => {
        if(item.id === product.product.id) {
          this.cartArray[index].quantity++;
          found = true;
        }
        else {
          if((index === this.cartArray.length-1) && !found) {
            this.cartArray.push({
              product: item,
              quantity: 1
            });
          }
        }
      });
    }
    else {
      this.cartArray.push({
        product: item,
        quantity: 1
      });
    }
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).set({
      cart: this.cartArray,
      email: this.loginService.currentUser.email,
      name: this.loginService.currentUser.name,
    })
  }
}

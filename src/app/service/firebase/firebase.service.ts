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

  total: number = 0;
  cartArray = [];

  private cartRef: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private loginService: LoginService, public apiService:ApiService) {
    this.cartRef = this.afs.collection<User>(`users`);
  }

  getFirebaseCart() {
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).ref.onSnapshot(doc => {
      this.cartArray = (doc.data() as User).cart;
      this.itemTotal();
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
    this.updateFirebase();
    this.itemTotal();
  }

  updateQuantity(item) {
    if(item.quantity <= 0) {
      item.quantity = 1;
    }
    this.itemTotal();
    this.updateFirebase();
  }

  itemTotal() {
    this.total = 0;
    this.cartArray.forEach(item => {
      if(item.product.price === null || item.product.price === '0.0') {
        this.total += (item.quantity * 5);
      }
      else {
        this.total += (item.product.price * item.quantity)
      }
    });
  }

  removeItem(index) {
    this.cartArray.splice(index, 1);
    this.updateFirebase();
  }

  updateFirebase() {
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).set({
      cart: this.cartArray,
      email: this.loginService.currentUser.email,
      name: this.loginService.currentUser.name,
    })
  }
}

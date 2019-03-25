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

  cartArray: Product[] = [];
  productCart: Product[] = [];

  private cartRef: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private loginService: LoginService, public apiService:ApiService) {
    this.cartRef = this.afs.collection<User>(`users`);
  }

  getCartItems() {
    this.productCart = [];
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).ref.onSnapshot(doc => {
      this.cartArray = (doc.data() as User).cart;
      this.cartArray.forEach(item => {
        this.apiService.getById(item).subscribe(product => {
          this.productCart.push(product as Product);
        })
      });
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
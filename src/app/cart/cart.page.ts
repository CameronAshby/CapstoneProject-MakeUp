import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/firebase/firebase.service';
import {LoginService} from '../service/login/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartArray: [];

  constructor(private firebaseService: FirebaseService, private loginService: LoginService) { }

  ngOnInit() {
    this.firebaseService.getCartItems();
  }
 getCartArray() {
    this.firebaseService.getCartObservable().subscribe( user => {
       user.forEach(docUser => {
           if (docUser.email === this.loginService.currentUser.email) {
               this.cartArray = docUser.cart;
            console.log("cart" + docUser.cart)
           }
       });
        return user
    })
 }
}

import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/firebase/firebase.service';
import {LoginService} from '../service/login/login.service';
import {ApiService} from '../service/api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private firebaseService: FirebaseService, public apiService: ApiService, public loginService: LoginService, private router: Router) {
      if(this.loginService.currentUser) {
          this.firebaseService.getCartItems()
      }
  }

  ngOnInit() {
      console.log(this.loginService.currentUser);
  }
  getCartArray() {
      console.log(this.apiService.cartArray);
  }
}

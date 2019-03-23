import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/firebase/firebase.service';
import {LoginService} from '../service/login/login.service';
import {Router} from '@angular/router';
import {ApiService} from '../service/api/api.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

    productArray: Product[] = [];

  constructor(public firebaseService: FirebaseService, public loginService: LoginService, private router: Router, public apiService: ApiService) {}

  ionViewDidEnter() {
      if(this.loginService.currentUser) {
          // this.firebaseService.getCartItems();
      }
      else {
          this.router.navigate(['/welcome-page']);
      }
  }

  ngOnInit() {
  }
}

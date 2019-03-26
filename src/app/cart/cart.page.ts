import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/firebase/firebase.service';
import {LoginService} from '../service/login/login.service';
import {Router} from '@angular/router';
import {ApiService} from '../service/api/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public firebaseService: FirebaseService, public loginService: LoginService, private router: Router, public apiService: ApiService) {}

  ionViewDidEnter() {
      if(!this.loginService.currentUser) {
          this.router.navigate(['/welcome-page']);
      }
      else {
          this.firebaseService.toggleCheckout = false;
          this.firebaseService.getFirebaseCart();
      }
  }

  shopping() {
      this.router.navigate(['/shop']);
  }

  changeToProduct(id) {
      this.router.navigate([`/shop/product-page/${id}`]);
  }

  checkout() {
      this.firebaseService.toggleCheckout = true;
  }

  ngOnInit() {
  }
}

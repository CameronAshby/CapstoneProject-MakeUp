import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/firebase/firebase.service';
import {LoginService} from '../service/login/login.service';
import {Router} from '@angular/router';
import {Product} from '../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  constructor(public firebaseService: FirebaseService, public loginService: LoginService, private router: Router) {}

  ionViewDidEnter() {
      if(this.loginService.currentUser) {
          this.firebaseService.getCartItems()
      }
      else {
          this.router.navigate(['/welcome-page']);
      }
  }

  ngOnInit() {
  }
}

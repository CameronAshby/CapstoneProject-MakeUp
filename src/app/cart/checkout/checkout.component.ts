import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../service/firebase/firebase.service';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {}

  checkout() {
    let history: Product[] = [];
    this.firebaseService.getFirebaseCart();
    this.firebaseService.cartArray.forEach((product) => {
      history.push(product);
    });
    // this.firebaseService.getFirebaseHistory();
    // console.log(this.loginService.currentUser.purchaseHistory);
    this.loginService.currentUser.purchaseHistory.push({
      order: history,
      total: this.firebaseService.total
    });
    // console.log(this.loginService.currentUser.purchaseHistory);
    this.firebaseService.cartArray = [];
    // this.firebaseService.updateHistory();
    this.firebaseService.updateFirebase();
    this.router.navigate(['/landing']);
  }

  cancelCheckout() {
    this.firebaseService.toggleCheckout = false;
  }

}

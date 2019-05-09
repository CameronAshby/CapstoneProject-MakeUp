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
    if(this.firebaseService.cartArray.length === 0) {
      console.log('Must have items in cart');
      this.router.navigate(['/landing']);
    }
    else {
      this.firebaseService.cartArray.forEach((product) => {
        history.push(product);
      });
      this.loginService.currentUser.purchaseHistory.push({
        order: history,
        total: this.firebaseService.total
      });
      this.firebaseService.cartArray = [];
      this.firebaseService.updateFirebase();
      this.router.navigate(['/landing']);
    }
  }

  cancelCheckout() {
    this.firebaseService.toggleCheckout = false;
  }

}

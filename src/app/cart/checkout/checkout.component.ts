import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {}

  checkout() {

  }

  cancelCheckout() {
    this.firebaseService.toggleCheckout = false;
  }

}

import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/firebase/firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCartItems();
  }

}

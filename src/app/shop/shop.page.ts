import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api/api.service';
import {LoadingController} from '@ionic/angular';
import {FirebaseService} from '../service/firebase/firebase.service';
import {LoginService} from '../service/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(private api: ApiService, private loader: LoadingController, private firebaseService: FirebaseService, private loginService: LoginService, private router: Router) {
  }

  ionViewDidEnter() {
    if(this.api.apiArray.length === 0) {
      this.api.getApi();
    }
  }

  ngOnInit() {
  }

  viewCart() {
    this.router.navigate(['/cart']);
  }

}

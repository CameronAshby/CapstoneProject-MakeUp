import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../service/api/api.service';
import {Router} from '@angular/router';
import {LoadingController, ToastController} from '@ionic/angular';
import {Product} from '../../model/product';
import {LoginService} from '../../service/login/login.service';
import {FirebaseService} from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  search: string = '';

  product$: Observable<any>;

  productList: Product[] = [];
  searchList = [];

  constructor(private toastController: ToastController, public api: ApiService, private router: Router, private loader: LoadingController, public loginService: LoginService, public firebaseService:FirebaseService) {
    this.product$ = this.api.initializeAPI();
  }

  ngOnInit() {
    if(this.api.apiArray.length === 0) {
      this.api.getApi();
    }
  }

  showDetails(id: string) {
    this.router.navigate(['shop','product-page',id]);
  }

  routeToLogin() {
    this.router.navigate(['/welcome-page']);
  }

  filterProducts(search: string) {
    this.searchList = [];

    this.api.apiArray.forEach(product => {
      if(product.name.toUpperCase().includes(search)) {
        this.searchList.push(product);
      }
    });
  }

  addToCart(item) {
    this.presentToast();
    this.firebaseService.addToCart(item);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added to Cart',
      duration: 800,
      color: 'tertiary'
    });
    toast.present();
  }

}

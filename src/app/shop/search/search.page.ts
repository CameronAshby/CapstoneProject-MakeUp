import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../service/api/api.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {Product} from '../../model/product';
import {LoginService} from '../../service/login/login.service';
import {FirebaseService} from '../../service/firebase/firebase.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  product$: Observable<any>;

  productList: Product[] = [];

  constructor(public api: ApiService, private router: Router, private loader: LoadingController, public loginService: LoginService, public firebaseService:FirebaseService) {
    this.product$ = this.api.initializeAPI();
  }

  ngOnInit() {
    if(this.api.apiArray.length === 0) {
      this.getApiArray();
    }
  }

  showDetails(id: string) {
    this.router.navigate(['shop','product-page',id]);
  }

  routeToLogin() {
    this.router.navigate(['/welcome-page']);
  }

  async getApiArray() {
    const loading = await this.loader.create();
    loading.present().then(() => {
      this.api.initializeAPI().subscribe((data) => {
        this.api.apiArray = data;
        console.log(data);
        loading.dismiss();
      })
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../service/api/api.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  product$: Observable<any>;

  product: {};

  constructor(private api: ApiService, private loader: LoadingController) {
    this.product$ = this.api.initializeAPI();
  }

  async ngOnInit() {

    // const loading = await this.loader.create();
    // loading.present().then(() => {
    //   this.api.initializeAPI().subscribe((data) => {
    //     this.api.apiArray = data;
    //     console.log(data);
    //     loading.dismiss();
    //   })
    // });
  }

}

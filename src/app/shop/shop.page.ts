import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../service/api/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  product$: Observable<any>;

  product: {};

  constructor(private api: ApiService) {
    this.product$ = this.api.initializeAPI();

    this.api.initializeAPI().subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}

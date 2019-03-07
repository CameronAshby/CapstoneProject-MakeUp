import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {
  productId: string;
  results$: Observable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');
    console.log(this.productId);
    if(this.productId) {
      this.results$ = this.api.getById(this.productId);
    }
  }

}

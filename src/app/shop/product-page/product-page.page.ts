import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api/api.service';
import {Observable} from 'rxjs';
import {LoginService} from '../../service/login/login.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {
  productId: string;
  results$: Observable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, public loginService: LoginService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');

    if(this.productId) {
      this.results$ = this.api.getById(this.productId);
    }
  }

}

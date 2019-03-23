import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api/api.service';
import {Observable} from 'rxjs';
import {LoginService} from '../../service/login/login.service';
import {FirebaseService} from '../../service/firebase/firebase.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {
  productId: string;
  results$: Observable<any>;

  similarProducts$: Observable<any>;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, public loginService: LoginService, public firebaseService:FirebaseService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');

    if(this.productId) {
      this.results$ = this.api.getById(this.productId);
      this.results$.subscribe(product => {
        this.similarProducts$ = this.api.getByProduct(product.product_type);
      });
    }
  }

  routeToLogin() {
    this.router.navigate(['/welcome-page']);
  }

  showDetails(id: string) {
    this.router.navigate(['shop','product-page',id]);
  }

}

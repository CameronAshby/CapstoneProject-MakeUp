import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiService} from '../../service/api/api.service';
import {Product} from '../../model/product';
import {Pro} from '@ionic/pro';
import {LoginService} from '../../service/login/login.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit, OnDestroy {

  products = [
    {name: 'Blush', code: 'blush', image: '../../../assets/productImages/Blush.jpg'},
    {name: 'Bronzer', code: 'bronzer', image: '../../../assets/productImages/bronzer.jpg'},
    {name: 'Eyebrow', code: 'eyebrow', image: '../../../assets/productImages/eyebrow.png'},
    {name: 'Eyeliner', code: 'eyeliner', image: '../../../assets/productImages/eyeliner.jpg'},
    {name: 'Eyeshadow', code: 'eyeshadow', image: '../../../assets/productImages/eyeshadow.jpg'},
    {name: 'Foundation', code: 'foundation', image: '../../../assets/productImages/foundation.jpg'},
    {name: 'Lip Liner', code: 'lip_liner', image: '../../../assets/productImages/lipliner.jpeg'},
    {name: 'Lipstick', code: 'lipstick', image: '../../../assets/productImages/lipstick.jpg'},
    {name: 'Mascara', code: 'mascara', image: '../../../assets/productImages/mascara.jpg'},
    {name: 'Nail Polish', code: 'nail_polish', image: '../../../assets/productImages/nailpolish.jpg'}
  ];

  id: string;
  results$: Observable<any>;

  productArray: Product[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, public loginService: LoginService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.results$ = this.api.getByProduct(this.id);
    }
  }

  ngOnDestroy() {
  }

  changeMenu(id: string) {
    this.router.navigate(['shop','product',id]);
  }

  showDetails(id: string) {
    this.router.navigate(['shop','product-page',id]);
  }
}

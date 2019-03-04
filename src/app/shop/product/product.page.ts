import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiService} from '../../service/api/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  products = [
    {name: 'Blush', code: 'blush'},
    {name: 'Bronzer', code: 'bronzer'},
    {name: 'Eyebrow', code: 'eyebrow'},
    {name: 'Eyeliner', code: 'eyeliner'},
    {name: 'Eyeshadow', code: 'eyeshadow'},
    {name: 'Foundation', code: 'foundation'},
    {name: 'Lip Liner', code: 'lip_liner'},
    {name: 'Lipstick', code: 'lipstick'},
    {name: 'Mascara', code: 'mascara'},
    {name: 'Nail Polish', code: 'nail_polish'}
  ];

  id: string;
  results$: Observable<any>;

  productArray = [];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.results$ = this.api.getByProduct(this.id);
    }
  }

  changeMenu(id: string) {
    this.router.navigate(['shop','product',id]);
  }

  showDetails(id: string) {
    this.router.navigate(['shop','product-page']);
  }
}

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

  id: string;
  productId: string;
  selectedItem: {};
  results$: Observable<any>;

  product = [];

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

  showDetails(id: string, selectedItem: {}) {
    this.router.navigate(['shop','product',this.id,id]).then(() => {
      this.productId = id;
      this.selectedItem = selectedItem;
      console.log(this.selectedItem);
    });
  }
}

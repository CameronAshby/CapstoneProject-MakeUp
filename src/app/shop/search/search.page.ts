import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../service/api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  product$: Observable<any>;

  product: {};

  constructor(private api: ApiService, private router: Router) {
    this.product$ = this.api.initializeAPI();
  }

  ngOnInit() {
  }

  showDetails(id: string) {
    this.router.navigate(['shop','product-page',id]);
  }

}

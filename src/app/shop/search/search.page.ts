import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../service/api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  product$: Observable<any>;

  product: {};

  constructor(private api: ApiService) {
    this.product$ = this.api.initializeAPI();
  }

  ngOnInit() {
  }

}

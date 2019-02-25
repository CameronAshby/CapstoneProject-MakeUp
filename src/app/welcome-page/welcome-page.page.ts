import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {

  product$: Observable<any>;

  product: {};

  constructor(private api: ApiService) {
    this.product$ = this.api.initializeAPI();
  }

  ngOnInit() {
  }
}

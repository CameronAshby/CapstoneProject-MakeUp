import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api/api.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  makeUpArray = [];

  constructor(private api: ApiService) {
    this.api.initializeAPI().subscribe((data) => {
      console.log(data);
      this.makeUpArray = data;
    });
  }

  ngOnInit() {
  }
}

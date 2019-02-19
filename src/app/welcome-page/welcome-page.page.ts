import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api/api.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  loadAPI() {
    this.api.initializeAPI().subscribe((data) => {
      console.log('started');
      console.log(data);
      console.log('finished');
    });
  }
}

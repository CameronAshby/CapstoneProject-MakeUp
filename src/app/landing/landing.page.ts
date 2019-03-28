import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if(!this.loginService.currentUser) {
      this.router.navigate(['/welcome-page']);
    }
  }

}

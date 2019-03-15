import {Component, NgZone, OnInit} from '@angular/core';
import {LoginService} from '../service/login/login.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor(public loginService: LoginService,) {

  }

  ngOnInit() {
  }

  setEmail(email) {
    this.email = email;
  }

  updateName(name) {
    this.name = name;
  }

  setUserName(name) {
    this.loginService.userName = name;
  }

}



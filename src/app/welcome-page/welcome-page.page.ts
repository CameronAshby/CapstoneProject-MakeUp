import {Component, OnInit} from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {FirebaseService} from '../service/firebase/firebase.service';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  name: string;
  email: string;
  password: string;
  isNewUser: boolean = false;

  constructor(public loginService: LoginService, public firebaseService: FirebaseService, public menuCtrl: MenuController, private router: Router) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {

  }

  setUserName(name) {
    this.loginService.userName = name;
  }

  newUser() {
    this.isNewUser = true;
  }

  cancel(){
    this.isNewUser = false;
    this.email = '';
    this.password = '';
  }
}



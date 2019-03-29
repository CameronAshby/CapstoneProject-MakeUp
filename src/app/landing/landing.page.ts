import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {Router} from '@angular/router';
import {FirebaseService} from '../service/firebase/firebase.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if(!this.loginService.currentUser) {
      this.router.navigate(['/welcome-page']);
    }
    else {
      this.firebaseService.updateFirebase();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {Router} from '@angular/router';
import {FirebaseService} from "../service/firebase/firebase.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  constructor(public loginService: LoginService, private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    if(!this.loginService.currentUser) {
      this.router.navigate(['/welcome-page']);
    }
  }




}

import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {Router} from '@angular/router';
import {FirebaseService} from '../service/firebase/firebase.service';
import {User} from '../model/User';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private afs: AngularFirestore, private loginService: LoginService, private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if(!this.loginService.currentUser) {
      this.router.navigate(['/welcome-page']);
    }
  }

}

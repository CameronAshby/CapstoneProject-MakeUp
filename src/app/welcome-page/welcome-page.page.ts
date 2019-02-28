
import {Component, NgZone, OnInit} from '@angular/core';
import {LoginService} from "../service/login/login.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  email: string;
  password: string;
  profilePic = '';
  user;

  constructor(private loginService: LoginService, private zone:NgZone) {

  }

  ngOnInit() {
  }

  registerGoogle(){
    let user = this.user;
    this.loginService.signIn().then( data =>{
      this.zone.run( ()=>{
        user = {
          name: data['user']['displayName'],
          email: data['user']['email'],
          cart: [],
          profilePic: data['user']['photoURL']
         }
        });
    });
  }
  registerEmail(){
    let user = this.user;
    this.loginService.signIn().then( data =>{
        user = {
          name: '',
          email: '',
          cart: [],
          password: '',
          profilePic: ''
        }
      });
  }



}



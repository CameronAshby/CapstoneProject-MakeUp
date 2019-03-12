
import {Component, NgZone, OnInit} from '@angular/core';
import {LoginService} from "../service/login/login.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  email: string;
  name: string;
  password: string;

  constructor(private loginService: LoginService, ) {

  }

  ngOnInit() {
  }

  setEmail(email){
    this.email = email;
  }
  updateName(name){
    this.name = name;
    console.log("update Name" + this.name)
  }


  // registerEmail(){
    // let user = this.user;
    // this.loginService.signIn().then( data =>{
    //     user = {
    //       name: '',
    //       email: '',
    //       cart: [],
    //       password: '',
    //       profilePic: ''
    //     }
    //   });
  // }



}



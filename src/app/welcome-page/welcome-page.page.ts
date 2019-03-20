import {Component, OnInit} from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {forEach} from "@firebase/util";
import {User} from "../model/User";

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
  fbUserArray;

  constructor(public loginService: LoginService) {

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

  newUser() {
    this.isNewUser = true;
  }

  saveNewUser(name, email, password) {
    this.loginService.getUsersObservable().subscribe(users => {
      this.fbUserArray = users;

    this.fbUserArray.forEach( user =>{
      if (user.email === email){
        console.log("That email is already being used");
        return;
        }
      });
    this.loginService.userName = name;
      this.loginService.newUser(email, password);
      console.log("New user signed in with email is " + this.loginService.userName);

    this.isNewUser = false;
    });
  }
}



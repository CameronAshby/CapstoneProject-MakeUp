import { Component } from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoginService} from './service/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Welcome',
      url: '/landing',
      icon: 'home'
    },
    {
      title: 'Shop',
      url: '/shop',
      icon: 'pricetag'
    },
    {
      title: 'Cart',
      url: '/cart',
      icon: 'cart'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'About The Oasis',
      url: '/about',
      icon: 'flower'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loginService: LoginService,
    private router: Router,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  signOut() {
    this.loginService.logout();
    this.router.navigate(['/welcome-page']);
  }

  signIn() {
    this.router.navigate(['/welcome-page']);
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

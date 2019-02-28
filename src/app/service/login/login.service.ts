import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user/user';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  signedIn: boolean;

  constructor(public afAuth: AngularFireAuth, ) {}

  signIn() {
    this.signedIn = true;
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

  }
  signOut(){
    this.signedIn = false;
  this.afAuth.auth.signOut();
  }


}

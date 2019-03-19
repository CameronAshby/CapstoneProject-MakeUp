import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';
import {LoginService} from '../login/login.service';
import {User} from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore, private loginService: LoginService) {
  }

  getCartItems() {
    this.afs.collection<User>(`users`).doc<User>(this.loginService.currentUser.email).ref.onSnapshot(doc => {
      console.log(this.loginService.currentUser = doc.data() as User);
    });
  }
}

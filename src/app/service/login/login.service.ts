import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction
} from "@angular/fire/firestore";
import {User} from "../../model/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userRef: AngularFirestoreDocument<User>;
  private usersRef: AngularFirestoreCollection<User>;

  constructor(private db: AngularFirestore) {
    this.usersRef = this.db.collection<User>(`users`);
  }
  getUserObservable(name: string): Observable<User> {
    return this.db.doc<User>(`users/${name}`).valueChanges();
  }

  getCompaniesObservable(): Observable<User[]>{
    return this.usersRef.snapshotChanges()
        .pipe(
            map((items: DocumentChangeAction<User>[]): User[] => {
              return items.map((item: DocumentChangeAction<User>): User => {
                return {
                  name: item.payload.doc.data().name,
                  email: item.payload.doc.data().email,
                  cart: item.payload.doc.data().cart,
                  password: item.payload.doc.data().password,
                }as User;
              });
            })
        );

  }

  saveUser(user: User) {
    return this.usersRef.add(user)
        .then(_ => console.log(`Save user ${user.name}`));
  }

  // editCompany(name: string, company: any) {
  //   return this.companiesRef.doc(key).update(company)
  //       .then(_ => console.log('Success on update'))
  //       .catch(error => console.log('update', error));
  // }

  removeCompany(name: string) {
    return this.usersRef.doc(name).delete()
        .then(_ => console.log('Success on remove'))
        .catch(error => console.log('remove', error));
  }
}

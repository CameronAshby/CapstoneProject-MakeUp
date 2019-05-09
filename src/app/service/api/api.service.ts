import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiArray = [];


  constructor(private http : HttpClient, private afs: AngularFirestore) {
  }

  getApi() {
    this.afs.collection(`api`).get().subscribe((data) => {
      data.forEach(item => {
        this.apiArray.push(item.data());
      });
    });
  }

  initializeAPI(): Observable<any> {
    return this.http.get('https://makeup-api.herokuapp.com/api/v1/products.json');
  }

  getByProduct(id): Observable<any> {
    return this.http.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${id}`);
  }

  getByBrand(id): Observable<any> {
    return this.http.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${id}`);
  }

  getByQuality(quality) {
    let filteredArray = [];

    this.apiArray.forEach((item) => {
      item.tag_list.forEach((tag) => {
        if(tag === quality) {
          filteredArray.push(item);
        }
      })
    });

    return filteredArray;
  }

  getById(id) {
    return this.http.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
  }
}

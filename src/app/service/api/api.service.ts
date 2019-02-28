import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {

  }

  initializeAPI(): Observable<any> {
    return this.http.get('http://makeup-api.herokuapp.com/api/v1/products.json');
  }

  getByProduct(id): Observable<any> {
    return this.http.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${id}`);
  }
}

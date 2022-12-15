import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { ProductModel } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl= "http://localhost:8081/boatManagement/user";
  constructor(private http: HttpClient,) {}

  login(loginData: any) {
    return this.http.post<any>(this.baseUrl + 'user/userLogin', loginData);
  }

  /*
  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('products', {
      headers: {},
    });
  }
  */
}
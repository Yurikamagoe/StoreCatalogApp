import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://localhost:5001/api/product'

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  CreateProduct(product: Product) : Observable<any>{
    return this.http.post<Product>(this.url, product, httpOptions);
  }
}

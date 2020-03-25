import { Injectable } from '@angular/core';
import { data } from './Data';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products = data;
  api = 'https://5e7ba7a50e04630016333677.mockapi.io';
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/Product`);
  }
  getProductDetail(id):Observable<Product>{
    return this.http.get<Product>(`${this.api}/Product/${id}`);
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id);
  }

  addProduct(product){
    this.products.push(product);
  }
}
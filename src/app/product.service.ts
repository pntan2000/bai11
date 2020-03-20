import { Injectable } from '@angular/core';
import { data } from './Data';
import { Product } from '../Product';

@Injectable()
export class ProductService {
  products = data;
  constructor() { }
  getProducts(){
    return this.products;
  }

  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id);
  }

  addProduct(product){
    this.products.push(product);
  }
}
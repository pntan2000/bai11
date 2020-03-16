import { Component, OnInit } from '@angular/core';
import {data} from "../Data";
import {Product} from "../Product";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
products = data;
selected: Product;
showDetail(product){
  this.selected = product;
}
removeItem(id){
return this.products = this.products.filter(product => product.id != id)
}
}
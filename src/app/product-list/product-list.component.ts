import { Component, OnInit } from '@angular/core';
import {data} from "../Data";
import {Product} from "../Product";
import {ProductService} from "../product.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit():void {
    this.products = this.productService.getProducts();
  }
selected: Product;
showDetail(product){
  this.selected = product;
}
removeItem(id){
return this.products = this.products.filter(product => product.id != id)
}
}
import { Component, OnInit } from '@angular/core';
import {data} from "../Data";
import {Product} from "../Product";

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

products = data;
selected: Product;
showDetail(product){
  console.log(product);
  this.selected = product;
}
removeItem(id){
  if(id == this.selected.id){
    this.closeDetail();
  }
return this.products = this.products.filter(product => product.id != id)
}

closeDetail(){
  return this.selected = null
}

}
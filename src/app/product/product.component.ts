import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../servise/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[]

  constructor( private productservice:ProductService){

  }
    ngOnInit(): void {

      this.productservice.getProduct().subscribe((data)=>{
      this.products=data;
      console.log(data);
      console.log(this.products);
      console.log(this.products[0]);

      });

    }

    showMessage(product:Product){
      alert(product.name  +"Adeed To Cart ")
    }
}

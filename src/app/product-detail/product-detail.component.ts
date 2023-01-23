import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../servise/cart.service';
import { ProductService } from '../servise/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product:Product;
  id:any;
  selected=1

    constructor(private router:ActivatedRoute,private productService:ProductService,private cart:CartService){

    }
    ngOnInit(): void {
     this.id=this.router.snapshot.paramMap.get('id');

     console.log(this.id);

     this.productService.getProduct().subscribe((data)=>{
       console.log(data);

       this.product=data.filter(product=> product.id==this.id)[0]
       console.log(this.product);

     })

    }
    addToCart(product:Product){
      product.count=this.selected ;
     this.cart.add(product)

    }
    onChange(s:any){
    this.selected=s;
    }

}

import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../servise/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product:Product;
  @Output() item:EventEmitter<Product>= new EventEmitter<Product>()
  selected=1


constructor(private cart:CartService){

}

addToCart(product:Product){
  this.item.emit(product)
  product.count=this.selected ;
 this.cart.add(product)


}
onChange(s:any){
this.selected=s;
}

}

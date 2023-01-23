import { Component,OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { CartService } from '../servise/cart.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  customer:Customer
  orderList:Product[]
 totalPrice=0;
  constructor(private cartService:CartService){


  }

  ngOnInit(): void {
    this.customer=this.cartService.customer$.value
    this.orderList=this.cartService.cart.value
    this.cartService.cart.value.forEach(item=>{
      this.totalPrice+=(item.count*item.price)
    })

    this.cartService.cart.next([])
  }
}

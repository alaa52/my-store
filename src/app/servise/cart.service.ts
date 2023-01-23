import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject,  Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CartService {
customer={username:'',address:'',masterCard:''}
  cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  currentCart=this.cart.asObservable()
  customer$=new BehaviorSubject<Customer>(this.customer)
update(customer:Customer){
  this.customer$.next(customer)
}
  add(product: Product) {
    this.cart.next(this.cart.value.filter(item => item.id != product.id))
      this.cart.value.push(product)
      this.cart.next(this.cart.value)
  }
  remove(product: Product) {
      this.cart.next(this.cart.value.filter(item => item.id != product.id))
  }
}

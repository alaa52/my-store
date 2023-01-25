import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { CartService } from '../servise/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Product[]
  customer:Customer
  myForm:FormGroup

  constructor(private cartService:CartService,private router:Router){

  }
  ngOnInit(): void {
   this.cart=this.cartService.cart.value;
   this.myForm=new FormGroup({
      username:new FormControl('',[Validators.required,Validators.min(5)]),
      address:new FormControl(''),
      masterCard:new FormControl('',[Validators.required,Validators.min(14)])

    });
  }
removeFromCart(product:Product){
  this.cartService.remove(product)
  this.cart=this.cart.filter(item=>item.id !=product.id)
  alert( product.name  +" Removed from Cart ")

}
submitForm(){

  console.log(this.myForm.value);
  if(this.myForm.valid){

   this.cartService.update(this.myForm.value)
   this.router.navigateByUrl('/order')
  }
}
validateName(){
  if(!this.myForm.value.username.match('^[a-zA-Z_ ]*$'))
  {
    this.myForm.controls['username'].setErrors({ missnotNumber: true })

  }}
  notNumber(control: string): boolean {
    return this.myForm.controls[control].hasError('missnotNumber');
  }
}

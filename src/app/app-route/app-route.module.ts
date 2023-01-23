import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';
import { OrderlistComponent } from '../orderlist/orderlist.component';

const routes: Routes = [
  {path:'product/:id',component:ProductDetailComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderlistComponent},
  {path:'',component:ProductComponent},
  {path: '**', component:ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class AppRouteModule { }

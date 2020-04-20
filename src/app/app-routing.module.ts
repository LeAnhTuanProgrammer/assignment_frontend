import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './frontend/home/home.component';

import { ShopComponent } from './frontend/shop/shop.component';
import { NewsComponent } from './frontend/news/news.component';
import { LoginComponent } from './frontend/login/login.component';
import { AboutComponent } from './frontend/about/about.component';
import { CartComponent } from './frontend/cart/cart.component';
import { CheckoutComponent } from './frontend/checkout/checkout.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'new',component:NewsComponent},
  {path:'login',component:LoginComponent},
   {path:'about',component:AboutComponent},
   {path:'cart',component:CartComponent},
   {path:'checkout',component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
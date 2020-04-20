import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
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
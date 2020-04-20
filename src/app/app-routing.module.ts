import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './frontend/home/home.component';
import { ShopComponent } from './frontend/shop/shop.component';
import { NewsComponent } from './frontend/news/news.component';
import { LoginComponent } from './frontend/login/login.component';
import { AboutComponent } from './frontend/about/about.component';
import { CartComponent } from './frontend/cart/cart.component';
import { CheckoutComponent } from './frontend/checkout/checkout.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ManagerComponent } from './backend/manager/manager.component';
import { ManagerNewsComponent } from './backend/manager-news/manager-news.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ProductDetailComponent } from './backend/product-detail/product-detail.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { NewsAddComponent } from './backend/news-add/news-add.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
    {path:'admin',component:AdminComponent,
  children:[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'manager',component:ManagerComponent},
  {path:'manager_new',component:ManagerNewsComponent},
  {path:'product/edit/:productID',component:ProductEditComponent},
  {path:'product/:productID',component:ProductDetailComponent},
  {path:'news',component:ProductAddComponent},
  {path:'New',component:NewsAddComponent},
 
]
},
  {path:'shop',component:ShopComponent},
  {path:'new',component:NewsComponent},
  {path:'login',component:LoginComponent},
   {path:'about',component:AboutComponent},
   {path:'cart',component:CartComponent},
   {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
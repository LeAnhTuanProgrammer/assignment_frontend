import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './frontend/home/home.component';
import { HeaderComponent } from './frontend/header/header.component';
import { MenuComponent } from './frontend/menu/menu.component';
import { SliderComponent } from './frontend/slider/slider.component';
import { AreaComponent } from './frontend/area/area.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { ShopComponent } from './frontend/shop/shop.component';
import { NewsComponent } from './frontend/news/news.component';
import { LoginComponent } from './frontend/login/login.component';
import { AboutComponent } from './frontend/about/about.component';
import { CartComponent } from './frontend/cart/cart.component';
import { CheckoutComponent } from './frontend/checkout/checkout.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ,NgbModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, HeaderComponent, MenuComponent, SliderComponent, AreaComponent, FooterComponent, ShopComponent, NewsComponent, LoginComponent, AboutComponent, CartComponent, CheckoutComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

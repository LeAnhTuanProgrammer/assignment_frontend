import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './product.service';
import { NewsService } from './news.service';

import { AlertService, AuthenticationService} from './_services';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ManagerComponent } from './backend/manager/manager.component';
import { ManagerNewsComponent } from './backend/manager-news/manager-news.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { NewsAddComponent } from './backend/news-add/news-add.component';
import { NewsEditComponent } from './backend/news-edit/news-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, NgbModule, ReactiveFormsModule, Ng2SearchPipeModule],
  declarations: [AppComponent, HelloComponent, HomeComponent, HeaderComponent, MenuComponent, SliderComponent, AreaComponent, FooterComponent, ShopComponent, NewsComponent, LoginComponent, AboutComponent, CartComponent, CheckoutComponent, AdminComponent, DashboardComponent, ManagerComponent, ManagerNewsComponent, ProductAddComponent, ProductDetailComponent, ProductEditComponent, NewsAddComponent, NewsEditComponent],
  bootstrap: [AppComponent],
  providers: [ProductService, NewsService,AlertService,
    AuthenticationService]
})
export class AppModule { }

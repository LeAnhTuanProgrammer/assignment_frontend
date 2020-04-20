import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './FrontEnd/home/home.component';
import { HeaderComponent } from './FrontEnd/header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

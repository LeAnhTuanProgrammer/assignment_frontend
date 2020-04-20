import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
selected: Product;
  products: Product[];
  constructor(
    private productService: ProductService
  ) { 
      console.log('constructor')
  }

ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
   this.productService.getProducts().subscribe(data => {
 
     this.products = data;
    });
  }
}
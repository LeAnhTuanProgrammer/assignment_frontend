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
  constructor(
    private productService: ProductService
  ) {
    console.log('constructor')
  }
  selected: Product;
  products: Product[];
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }
  removeItem(id) {
    this.productService.removeProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id != response.id);
    })
  }
}
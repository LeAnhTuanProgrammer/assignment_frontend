import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  page= 1;
pageSize= 5;
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
 
  getProducts(){
   this.productService.getProducts().subscribe(data => {
     console.log(data);
     this.products = data;
    });
  }
}
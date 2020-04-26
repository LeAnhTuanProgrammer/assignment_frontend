import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../Product';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
searchText;

selected: Product;
  products: Product[];
  constructor(
    private productService: ProductService
  ) { 
      console.log('constructor')
  }
  ngOnInit() {
      this.getProducts();
  }
  getProducts(){
   this.productService.getProducts().subscribe(data => {
 
     this.products = data;
    });
  }
}
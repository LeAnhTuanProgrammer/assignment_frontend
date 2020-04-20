import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../Product';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  page= 1;
pageSize= 5;
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
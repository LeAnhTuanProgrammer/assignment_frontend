import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../Product';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selected: Product;
  products: Product[];
  product: Product = new Product();
  constructor( 
    private productService: ProductService,
    private router: Router,
 
    ) { 
        console.log('constructor')
    }

  ngOnInit() {
    
  }

}
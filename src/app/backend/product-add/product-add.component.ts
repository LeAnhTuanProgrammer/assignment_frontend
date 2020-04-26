import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addProductsForm: FormGroup;
  submitted = false;
 product: Product = new Product();
  constructor(
  
    private productService: ProductService,
    private router: Router,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addProductsForm = this.FormBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      desc: ['', Validators.required],
      img: ['', Validators.required]
     
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get form() { return this.addProductsForm.controls; }

  onSubmit() {
    this.submitted = true;

   
    if (this.addProductsForm.invalid) {
        return;
    }
    this.productService.addProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl("/admin/manager")
   } );
   
}
  addProduct(){
    this.productService.addProduct(this.product).subscribe(data =>{
       this.router.navigateByUrl("/admin/manager")
    } );
  }
}
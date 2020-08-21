import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required,Validators.min(0)]],
      desc: ['', Validators.required],
      img: ['', Validators.required]
    });
  }
  get form() { return this.addProductsForm.controls; }
  //gt điều khiển biểu mẫu.
  onSubmit() {
    this.submitted = true;
    if (this.addProductsForm.invalid) {
      return;
    }
    this.productService.addProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/admin/manager")
    });

  }
}
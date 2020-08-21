import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProductsForm: FormGroup;
  submitted = false;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private FormBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.getProduct();
    this.editProductsForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required,Validators.min(0)]],
      desc: ['', Validators.required],
      img: ['', Validators.required]
    });
  }
  get form() { return this.editProductsForm.controls; }
  //gt điều khiển biểu mẫu.
  onSubmit() {
    this.submitted = true;
    if (this.editProductsForm.invalid) {
      return;
    }
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/admin/manager")
    });
  }
  getProduct() {
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.productID).subscribe(data => this.product = data);
    })
  }
}
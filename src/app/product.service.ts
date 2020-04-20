import { Injectable } from '@angular/core';

import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
 api = 'https://5e7f9bd27a92ed0016560818.mockapi.io/product';

  constructor(
    private http: HttpClient
    ) { }
  

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
   getProduct(id): Observable<Product>{
     console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  addProduct(product){
    return this.http.post<Product>(`${this.api}`, product);
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);
 
  }
  updateProduct(product){
     return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}
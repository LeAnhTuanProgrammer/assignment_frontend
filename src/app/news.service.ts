import { Injectable } from '@angular/core';

import { News } from './News';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {
 api1 = 'http://5e7f9bd27a92ed0016560818.mockapi.io/News';

  constructor(
    private http: HttpClient
    ) { }
  

    getProducts():Observable<News[]>{
        console.log(this.http.get<News[]>(this.api1));
    return this.http.get<News[]>(this.api1);
   

  }
   getNews(id): Observable<News>{
     console.log(id);
    return this.http.get<News>(`${this.api1}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removeNews(id): Observable<News>{
    return this.http.delete<News>(`${this.api1}/${id}`);
  }
  addNews(News){
    return this.http.post<News>(`${this.api1}`, News);
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);
 
  }
  updateNews(News){
     return this.http.put<News>(`${this.api1}/${News.id}`, News);
  }
}
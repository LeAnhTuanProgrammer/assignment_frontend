import { Component, OnInit } from '@angular/core';
import { News } from '../../News';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news',
  templateUrl:'./news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
selected: News;
  news: News[];
  constructor(
    private newService: NewsService
  ) { 
      console.log('constructor')
  }

ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
   this.newService.getProducts().subscribe(data => {
 
     this.news = data;
    });
  }
}
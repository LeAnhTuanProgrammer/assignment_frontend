import { Component, OnInit } from '@angular/core';
import { News } from '../../News';
import { Router } from '@angular/router';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-manager-news',
  templateUrl:'./manager-news.component.html',
  styleUrls: ['./manager-news.component.css']
})
export class ManagerNewsComponent implements OnInit {
  constructor(
    private newsService: NewsService
  ) { 
    console.log('constructor')
  }
   selected: News;
  news: News[];
  ngOnInit(): void {
    this.getProducts();
  }
 
  getProducts(){
   this.newsService.getProducts().subscribe(data => {
     console.log(data);
     this.news = data;
    });
  }
   removeItem(id){
   this.newsService.removeNews(id).subscribe(response => {
     this.news = this.news.filter(News => News.id != response.id);
   })
}
}
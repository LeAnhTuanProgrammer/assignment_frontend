import { Component, OnInit } from '@angular/core';
import { News } from '../../News';
import { Router } from '@angular/router';
import { NewsService } from '../../news.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {
  addNewsForm: FormGroup;
  submitted = false;
  News: News = new News();
  constructor(
    private newsService: NewsService,
    private router: Router,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addNewsForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      img: ['', Validators.required],
      desc: ['', Validators.required]
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get form() { return this.addNewsForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.addNewsForm.invalid) {
      return;
    }
    this.newsService.addNews(this.News).subscribe(data => {
      this.router.navigateByUrl("/admin/manager_new")
    });
  }
}

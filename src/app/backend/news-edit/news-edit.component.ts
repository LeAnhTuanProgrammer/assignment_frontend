import { Component, OnInit } from '@angular/core';
import { News } from '../../News';
import { ActivatedRoute,Router } from '@angular/router';
import { NewsService } from '../../news.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {
  editNewsForm: FormGroup;
  submitted = false;
  News: News;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getNews();

    this.editNewsForm = this.FormBuilder.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      desc: ['', Validators.required]
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
  });

  }
  get form() { return this.editNewsForm.controls; }

  onSubmit() {
    this.submitted = true;

   
    if (this.editNewsForm.invalid) {
        return;
    }
    this.newsService.updateNews(this.News).subscribe(data => {
      this.router.navigateByUrl("/admin/manager_new")
    });
   
}

  getNews(){
    this.route.params.subscribe(param => {
        this.newsService.getNews(param.NewsID).subscribe(data => this.News = data);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/common/services/article.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  articles;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getListArticles();
  }

  getListArticles() {
    this.articleService.getArticlesCards().subscribe(
      data => {
        this.articles = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}

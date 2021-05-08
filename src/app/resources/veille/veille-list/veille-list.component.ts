import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../../common/services/article.service";

@Component({
  selector: 'app-veille-list',
  templateUrl: './veille-list.component.html',
  styleUrls: ['./veille-list.component.scss']
})
export class VeilleListComponent implements OnInit {
  articles;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getListArticles();
  }

  getListArticles() {
    this.articleService.getArticlesCardsVeille("developpement").subscribe(
      data => {
        this.articles = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}

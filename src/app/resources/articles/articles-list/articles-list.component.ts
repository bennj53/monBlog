import { Component, OnInit, Input } from "@angular/core";
import { ArticleService } from "../../../common/services/article.service";

@Component({
  selector: "app-articles-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.scss"],
})
export class ArticlesListComponent implements OnInit {
  articles;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getListArticles();
  }

  getListArticles() {
    this.articleService.getArticlesCardsByCategory("general").subscribe(
      data => {
        this.articles = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}

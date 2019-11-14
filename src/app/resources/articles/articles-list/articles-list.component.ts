import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../../common/services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  @Input() articleCards: any[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getServiceName();
    this.getListArticles();
  }

  getListArticles() {
    this.articleCards = this.articleService.getArticlesCards();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() auteur: string;
  @Input() date: string;
  @Input() resume: string;
  @Input() titre: string;
  motcles: string[];
  @Input() article;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGetArticleDetail() {
   let urlArticle = this.article._links.article.href;
    console.log("TEST : " + urlArticle);
    this.router.navigateByUrl("/article/"+btoa(urlArticle));
  }

}

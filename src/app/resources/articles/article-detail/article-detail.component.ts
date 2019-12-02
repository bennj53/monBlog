import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/common/services/article.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  auteur: string;
  titre: string;
  contenu: string;
  date: string;
  resume: string;
  motcles: string[];
  article;
  url: string;

  constructor(private articleService: ArticleService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          let param: string = activatedRoute.snapshot.params.urlArticle;
          this.url = atob(param);
          this.getArticle(this.url);
        }
      });

   }

  ngOnInit() {
  }

  getArticle(url) {
    this.articleService.getArticleByUrl(url)
    .subscribe(data => {
      this.article = data;
    }, err => {
      console.log(err);
    });
  }

}

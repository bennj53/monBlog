import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/common/services/article.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/common/services/login.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  public host: string = environment.apiBaseUrl;
  auteur: string;
  titre: string;
  contenu: string;
  date: string;
  resume: string;
  motcles: string[];
  article;
  url: string;
  roles: string [] = [];

  constructor(private articleService: ArticleService,
              private activatedRoute: ActivatedRoute,
              private router: Router,private loginService: LoginService) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          let param: string = activatedRoute.snapshot.params.urlArticle;
          this.url = atob(param);
          this.getArticle(this.url);
        }
      });

   }

  ngOnInit() {
        //recup roles permissions
        this.loginService.getRoles().subscribe((rolesTab) => {
          this.roles = rolesTab;
        });
  }

  getArticle(url) {
    this.articleService.getArticleByUrl(url)
    .subscribe(data => {
      this.article = data;
    }, err => {
      console.log(err);
    });
  }

  onGoToArticleEditor(){
    //this.router.navigateByUrl("editor");
    console.log("id de onGoToArticleEditor : " + this.article.id);
    //this.router.navigate(['/editor'], { queryParams: { id: this.article.id } });
    this.router.navigate(['/editor/' + this.article.id]);
  }
}

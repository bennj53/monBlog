import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/common/services/article.service';
import { reduce } from 'rxjs/operators';

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
  @Input() imgArticle: string;
  @Input() urlArticle: string;
  motcles: string[];
  @Input() article;
  auteurColors = [
    {
      'name': 'bennj53',
      'color': 'red'
    },
    {
      'name': 'journaldugeek.com',
      'color': 'blue'
    },
    {
      'name': 'LesNumériques.com',
      'color': 'green'
    },
    {
      'name': '01net.com',
      'color': 'purple'
    },
    {
      'name': 'mac4ever.com',
      'color': 'white'
    }
  ];

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
  }

  onGetArticleDetail() {
    if(this.urlArticle === null){
      //let urlArticle = this.article._links.article.href;
      let urlArticle = this.article.id;
      console.log("TEST : " + urlArticle);
      //this.router.navigateByUrl("/article/"+btoa(urlArticle));
      this.router.navigateByUrl("/article/"+btoa("http://localhost:8087/articles/"+urlArticle));
    }else{
      console.log("TEST : " + this.urlArticle);
      this.router.navigateByUrl(btoa(this.urlArticle));
    }
  }

  onGetAutorColor(autor: string) {
    switch (autor) {
      case "journaldugeek.com" : return "#971048";
      break;
      case "LesNumériques.com" : return "white";//#4FC649
      break;
      case "01net.com" : return "#E40613";
      break;
      case "mac4ever.com" : return "#7879A3";
      break;
      case "frandroid.com" : return "#2C3049";
      break;
      case "macg.co" : return "#FF6627";
      break;
      default : return "#00C4A7";//#FFFFFF
      break;
    }
  }

  onGetAutorLogo(autor: string) {
    switch (autor) {
      case "journaldugeek.com" : return "../../../../assets/images/logoJDGEEK.png";
      break;
      case "LesNumériques.com" : return "../../../../assets/images/LogoLESNUMS.PNG";
      break;
      case "01net.com" : return "../../../../assets/images/logo01NET.gif";
      break;
      case "mac4ever.com" : return "../../../../assets/images/logoMAC4EVER.gif";
      break;
      case "frandroid.com" : return "../../../../assets/images/logoFrandroid.gif";
      break;
      case "macg.co" : return "../../../../assets/images/logoMacGeneration.gif";
      break;
      default : return "../../../../assets/images/LogoGigi.png";
      break;
    }
  }
}

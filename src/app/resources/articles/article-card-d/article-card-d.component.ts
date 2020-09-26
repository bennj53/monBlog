import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-article-card-d',
  templateUrl: './article-card-d.component.html',
  styleUrls: ['./article-card-d.component.scss']
})
export class ArticleCardDComponent implements OnInit {
  public host: string = environment.apiBaseUrl;
  @Input() auteur: string;
  @Input() date: string;
  @Input() resume: string;
  @Input() titre: string;
  @Input() imgArticle: string;
  @Input() urlArticle: string;
  motcles: string[];
  @Input() article;
  @Input() contenu: string;
  cardIsOpen: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cardIsOpen=false;
    this.resume = "Extrait : " + this.resume;
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
  onGetArticleDetail() {
    if(this.urlArticle === null){
      let urlArticle = this.article.id;
      console.log("url article interne : " + urlArticle);
      console.log("contenu article interne : " + this.contenu);
      this.router.navigateByUrl("/article/"+btoa(this.host + "articles/"+urlArticle));
    }else{
      console.log("url article externe : " + this.urlArticle);
      //window.open(this.urlArticle, "_blank");
      //this.router.navigateByUrl(this.urlArticle);
      if(this.cardIsOpen){
        //this.cardIsOpen = false;
      }else{
        this.cardIsOpen = true;
      }
      console.log("cardIsOpen : " + this.cardIsOpen);
    }
  }

}

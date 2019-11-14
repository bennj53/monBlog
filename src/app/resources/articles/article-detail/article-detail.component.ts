import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

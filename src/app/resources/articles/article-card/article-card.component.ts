import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

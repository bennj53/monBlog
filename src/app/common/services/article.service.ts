import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleCards: any[];

  constructor() {


    this.articleCards = [
      {
        auteur: 'Bennj5',
        titre: 'TITRE 2',
        date: '01-11-2019',
        resume: 'Pour resumer le 2eme article est un article',
        motcles: ['2', 'Today', 'Bennj53']
      },
      {
        auteur: 'Bennj5',
        titre: 'TITRE 2',
        date: '01-11-2019',
        resume: 'Pour resumer le 2eme article est un article',
        motcles: ['2', 'Today', 'Bennj53']
      },
      {
        auteur: 'Bennj',
        titre: 'TITRE 3',
        date: '01-12-2019',
        resume: 'Pour resumer le 3eme article est un article',
        motcles: ['3', 'Today', 'Bennj53']
      },
      {
        auteur: 'Benn',
        titre: 'TITRE 4',
        date: '01-09-2019',
        resume: 'Pour resumer l article 4 est un article',
        motcles: ['article', 'Today', 'Bennj53']
      },
      {
        auteur: 'Ben',
        titre: 'TITRE 5',
        date: '01-08-2019',
        resume: 'Pour resumer l article 5 est un article',
        motcles: ['2', 'Today', 'Bennj53']
      },
      {
        auteur: 'Be',
        titre: 'TITRE 6',
        date: '01-07-2019',
        resume: 'Pour resumer l article 6 est un article',
        motcles: ['3', 'Today', 'Bennj53']
      },
      {
        auteur: 'Bennj53',
        titre: 'TITRE 1',
        date: '01-10-2019',
        resume: 'Pour resumer l article est un article',
        motcles: ['article', 'Today', 'Bennj53']
      },
      {
        auteur: 'Bennj5',
        titre: 'TITRE 2',
        date: '01-11-2019',
        resume: 'Pour resumer le 2eme article est un article',
        motcles: ['2', 'Today', 'Bennj53']
      },
      {
        auteur: 'Bennj',
        titre: 'TITRE 3',
        date: '01-12-2019',
        resume: 'Pour resumer le 3eme article est un article',
        motcles: ['3', 'Today', 'Bennj53']
      },
      {
        auteur: 'Benn',
        titre: 'TITRE 4',
        date: '01-09-2019',
        resume: 'Pour resumer l article 4 est un article',
        motcles: ['article', 'Today', 'Bennj53']
      },
      {
        auteur: 'Ben',
        titre: 'TITRE 5',
        date: '01-08-2019',
        resume: 'Pour resumer l article 5 est un article',
        motcles: ['2', 'Today', 'Bennj53']
      },
      {
        auteur: 'Be',
        titre: 'TITRE 6',
        date: '01-07-2019',
        resume: 'Pour resumer l article 6 est un article',
        motcles: ['3', 'Today', 'Bennj53']
      }

    ];
  }

  getServiceName() {
    console.log('ArticleService injected OK');
    console.log('Auteur du premier article dans ArtcleService : ' + this.articleCards[0].auteur);
  }

  getArticlesCards() {
    return this.articleCards;
  }
}
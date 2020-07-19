import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { ArticleDetailComponent } from "src/app/resources/articles/article-detail/article-detail.component";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";
import { Article } from 'src/app/models/Article.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  //articles: any[];
  public host: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getArticlesCards() {
    return this.http.get(this.host + "articles", httpOptions);
  }

  getArticleByUrl(urlArticle) {
    return this.http.get(urlArticle);
  }

  getArticleById(id) {
    return this.http.get(this.host + "articles/" + id, httpOptions);
  }

  saveArticle(article: Article) {
    console.log("enter in saveArticle from article service component");
    return this.http.post(this.host + "articles/add",
    {titre: article.getTitle(), auteur: article.getAuteur(), resume: article.getResume(), contenu: article.getArticleContent()},
    httpOptions);
  }
  /* this.articleCards = [
      {
        auteur: "Bennj5",
        titre: "TITRE 2",
        date: "01-11-2019",
        resume: "Pour resumer le 2eme article est un article",
        motcles: ["2", "Today", "Bennj53"]
      },
      {
        auteur: "Bennj5",
        titre: "TITRE 2",
        date: "01-11-2019",
        resume: "Pour resumer le 2eme article est un article",
        motcles: ["2", "Today", "Bennj53"]
      },
      {
        auteur: "Bennj",
        titre: "TITRE 3",
        date: "01-12-2019",
        resume: "Pour resumer le 3eme article est un article",
        motcles: ["3", "Today", "Bennj53"]
      },
      {
        auteur: "Benn",
        titre: "TITRE 4",
        date: "01-09-2019",
        resume: "Pour resumer l article 4 est un article",
        motcles: ["article", "Today", "Bennj53"]
      },
      {
        auteur: "Ben",
        titre: "TITRE 5",
        date: "01-08-2019",
        resume: "Pour resumer l article 5 est un article",
        motcles: ["2", "Today", "Bennj53"]
      },
      {
        auteur: "Be",
        titre: "TITRE 6",
        date: "01-07-2019",
        resume: "Pour resumer l article 6 est un article",
        motcles: ["3", "Today", "Bennj53"]
      },
      {
        auteur: "Bennj53",
        titre: "TITRE 1",
        date: "01-10-2019",
        resume: "Pour resumer l article est un article",
        motcles: ["article", "Today", "Bennj53"]
      },
      {
        auteur: "Bennj5",
        titre: "TITRE 2",
        date: "01-11-2019",
        resume: "Pour resumer le 2eme article est un article",
        motcles: ["2", "Today", "Bennj53"]
      },
      {
        auteur: "Bennj",
        titre: "TITRE 3",
        date: "01-12-2019",
        resume: "Pour resumer le 3eme article est un article",
        motcles: ["3", "Today", "Bennj53"]
      },
      {
        auteur: "Benn",
        titre: "TITRE 4",
        date: "01-09-2019",
        resume: "Pour resumer l article 4 est un article",
        motcles: ["article", "Today", "Bennj53"]
      },
      {
        auteur: "Ben",
        titre: "TITRE 5",
        date: "01-08-2019",
        resume: "Pour resumer l article 5 est un article",
        motcles: ["2", "Today", "Bennj53"]
      },
      {
        auteur: "Be",
        titre: "TITRE 6",
        date: "01-07-2019",
        resume: "Pour resumer l article 6 est un article",
        motcles: ["3", "Today", "Bennj53"]
      }
    ];*/

  /*getServiceName() {
    console.log("ArticleService injected OK");
    console.log(
      "Auteur du premier article dans ArtcleService : " +
        this.articleCards[0].auteur
    );
  }*/
}

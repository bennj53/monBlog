import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/common/services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/Article.model';
import { SyncfusionMarkdownEditorComponent } from 'src/app/resources/syncfusion-markdown-editor/syncfusion-markdown-editor.component';
import { LoginService } from 'src/app/common/services/login.service';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit {
  article;
  articleForm: FormGroup;
  articleContent: string;
  auteur: string;
  //pr acceder aux proprietes et methodes du composant enfant syncfusionMark....
  @ViewChild(SyncfusionMarkdownEditorComponent) syncfusionMEditor: SyncfusionMarkdownEditorComponent;


  constructor(private router: Router, private articleService: ArticleService, private formBuilder: FormBuilder, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
    //recupérer le login du user connecter pour l indiquer comme auteur de l article
    this.loginService.getIdUser().subscribe(login => {
      this.auteur = login;
    });

    let id = this.route.snapshot.params['id'];
    console.log("id : " + id);
    if (id){
      this.articleService.getArticleById(id).subscribe(article => {
        this.article = article;
        this.articleContent = this.article.contenu;
        this.initForm();
      },
      err => {
        console.log(err);
      });

      this.route.params.subscribe((params: Params) => {
        id = params['id'];
        this.article = this.articleService.getArticleById(id);
        console.log('article' + this.article);
      });
      console.log("END OF INIT");
    }else{
      this.article = null;
      this.initForm();
    }

  }

  //creation du formulaire avec ses forms controls
  initForm() {
    console.log("initForm article is null : " + (this.article === null));

    if  (!this.article){
      this.articleForm = this.formBuilder.group(
        {
          title: ['', Validators.required],
          resume: ['', Validators.required],
          keywords: ['', Validators.required],
          articleContent: ['', Validators.required]
        }
      );
    }else{
      const{titre, resume, id, contenu} = this.article;
      console.log("ARTICLE PROPERTIES : " + titre + "/" + resume + "/" + id + "/" + contenu);
      this.articleForm = this.formBuilder.group(
        {
          title: [titre, Validators.required],
          resume: [resume, Validators.required],
          keywords: [id, Validators.required],
          articleContent: [contenu, Validators.required]
        }
      );
    }
  }


  createOrUpdateArticle(){
    console.log("Enregistrement du nouveau article");
    const formValue = this.articleForm.value;
    let syncfusionText : string = this.syncfusionMEditor.rteObj.value;

    console.log("Text in syncfusion component : " + syncfusionText);

    const newArticle = new Article(
      formValue['title'],
      formValue['resume'],
      formValue['keywords'],
      syncfusionText
    );

    //ajout de l'auteur qui est le user connecté
    newArticle.setAuteur(this.auteur);

    //creation ou update article
    if (this.article === null){
      this.article = newArticle;
      console.log("call save article");
      console.log( formValue['title'] + " " + formValue['resume']  + " " + formValue['keywords'] + " " + syncfusionText);
      this.saveArticle();
    }else{
      newArticle.setId(this.article.id);
      this.article = newArticle;
      console.log("call update article");
      this.updateArticle();
    }
    //this.articleService.saveArticle(newArticle);
    this.router.navigateByUrl("");
  }

  updateArticle() {
    this.articleService.updateArticle(this.article.id, this.article).subscribe(
      data => {
        this.article = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteArticle(){
    console.log("deleting article...")
    this.articleService.deleteArticleById(this.article.id).subscribe(
      data => {
        this.article = data;
      },
      err => {
        console.log(err);
      }
    );
    this.router.navigateByUrl("");
  }

  goToHome() {
    this.router.navigateByUrl("");
  }

  reloadArticle() {
    //TODO: recharger l'article à modifier
    //this.router.navigateByUrl("/articles");
  }

  getArticleDetail() {
    //TODO: implementer recherche article par critères
  }

  saveArticle() {
    this.articleService.saveArticle(this.article).subscribe(
      data => {
        this.article = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}

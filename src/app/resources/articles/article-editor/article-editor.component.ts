import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/common/services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/Article.model';
import { SyncfusionMarkdownEditorComponent } from 'src/app/resources/syncfusion-markdown-editor/syncfusion-markdown-editor.component';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit {
  article;
  articleForm: FormGroup;
  //pr acceder aux proprietes et methodes du composant enfant syncfusionMark....
  @ViewChild(SyncfusionMarkdownEditorComponent, {static: false}) syncfusionMEditor: SyncfusionMarkdownEditorComponent;


  constructor(private router: Router, private articleService: ArticleService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  //creation du formulaire avec ses forms controls
  initForm() {
    this.articleForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        resume: ['', Validators.required],
        keywords: ['', Validators.required],
        articleContent: ['', Validators.required]
      }
    );
  }


  onSubmitForm(){
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
    this.article = newArticle;
    console.log( formValue['title'] + " " + formValue['resume']  + " " + formValue['keywords'] + " " + syncfusionText);
    this.saveArticle();
    //this.articleService.saveArticle(newArticle);
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

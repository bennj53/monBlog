import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/common/services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/Article.model';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit {
  article;
  articleForm: FormGroup;

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
    const newArticle = new Article(
      formValue['title'],
      formValue['resume'],
      formValue['keywords'],
      formValue['articleContent']
    );
    this.articleService.saveArticle(newArticle);
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

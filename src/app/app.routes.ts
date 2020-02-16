import { Routes } from "@angular/router";
import { ArticlesListComponent } from "./resources/articles/articles-list/articles-list.component";
import { ArticleDetailComponent } from "./resources/articles/article-detail/article-detail.component";
import { ArticleEditorComponent } from "./resources/articles/article-editor/article-editor.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
  {
    path: "",
    component: ArticlesListComponent
  },
  {
    path: "articles",
    component: ArticlesListComponent
  },
  {
    path: "articles/:id",
    component: ArticleDetailComponent
  }
  ,
  {
    path: "editor",
    component: ArticleEditorComponent
  }
  ,
  {
    path: "login",
    component: LoginComponent
  }
  ,
  {
    path: "register",
    component: RegisterComponent
  }
];

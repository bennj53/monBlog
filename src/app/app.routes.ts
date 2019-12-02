import { Routes } from "@angular/router";
import { ArticlesListComponent } from "./resources/articles/articles-list/articles-list.component";
import { ArticleDetailComponent } from "./resources/articles/article-detail/article-detail.component";

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
    path: "article/:id",
    component: ArticleDetailComponent
  }
];

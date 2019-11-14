import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesListComponent } from './resources/articles/articles-list/articles-list.component';
import { ArticleDetailComponent } from './resources/articles/article-detail/article-detail.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'articles',
    component: ArticlesListComponent
  },
  {
    path: 'articles/:id',
    component: ArticleDetailComponent
  }
];

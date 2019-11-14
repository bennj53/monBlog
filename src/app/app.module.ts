import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesListComponent } from './resources/articles/articles-list/articles-list.component';
import { ArticleDetailComponent } from './resources/articles/article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ArticleCardComponent } from './resources/articles/article-card/article-card.component';
import { ArticleService } from './common/services/article.service';
import { FooterComponent } from './partials/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticlesListComponent,
    ArticleDetailComponent,
    ArticleCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

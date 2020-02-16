import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./partials/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { ArticlesListComponent } from "./resources/articles/articles-list/articles-list.component";
import { ArticleDetailComponent } from "./resources/articles/article-detail/article-detail.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { ArticleCardComponent } from "./resources/articles/article-card/article-card.component";
import { ArticleService } from "./common/services/article.service";
import { FooterComponent } from "./partials/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { CategoriesListComponent } from "./resources/categories/categories-list/categories-list.component";
import { CategoriesDetailComponent } from './resources/categories/categories-detail/categories-detail.component';
import { ArticleEditorComponent } from './resources/articles/article-editor/article-editor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TokenStorageServiceService } from './common/services/token-storage-service.service';
import { UserService } from './common/services/user.service';
import { LoginService } from './common/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticlesListComponent,
    ArticleDetailComponent,
    ArticleCardComponent,
    FooterComponent,
    CategoriesListComponent,
    CategoriesDetailComponent,
    ArticleEditorComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService, TokenStorageServiceService, UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}

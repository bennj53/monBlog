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
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { SyncfusionMarkdownEditorComponent } from './resources/syncfusion-markdown-editor/syncfusion-markdown-editor.component';
import { ToolbarService, LinkService, ImageService, MarkdownEditorService, RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { MarkdownModule } from 'ngx-markdown';
import { CarouselComponent } from './resources/affichage/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleCardDComponent } from './resources/articles/article-card-d/article-card-d.component';
import { VeilleListComponent } from './resources/veille/veille-list/veille-list.component';

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
    RegisterComponent,
    SyncfusionMarkdownEditorComponent,
    CarouselComponent,
    ArticleCardDComponent,
    VeilleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RichTextEditorAllModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ArticleService, TokenStorageServiceService, UserService, LoginService, authInterceptorProviders,
    ToolbarService, LinkService, ImageService, MarkdownEditorService],
  bootstrap: [AppComponent]
})
export class AppModule {}

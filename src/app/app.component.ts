import { Component, ViewEncapsulation } from '@angular/core';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/main.scss', './app.component.scss'],
  //encapsultation ... pour que le style ci dessus soit pour tous les composants de l'application
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'monBlog';

}

import { Component, OnInit, AfterViewInit, HostBinding } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/common/services/login.service";
import { TokenStorageServiceService } from "src/app/common/services/token-storage-service.service";
import { fromEvent } from "rxjs";
import {
  throttleTime,
  map,
  pairwise,
  distinctUntilChanged,
  share,
  filter,
} from "rxjs/operators";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
//enum pour gestion header
enum VisibilityState {
  Visible = "visible",
  Hidden = "hidden",
}

//enum pour gestion scroll
enum Direction {
  Up = "Up",
  Down = "Down",
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        width: 100%;
      }
    `,
  ],
  animations: [
    trigger("toggle", [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: "translateY(-100%)" })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: "translateY(0)", "z-index": 2 })
      ),
      transition("* => *", animate("200ms ease-in")),
    ]),
  ],
})
export class HeaderComponent implements AfterViewInit {
  isLogged: boolean;
  roles: string[] = [];
  idUser: string;
  private isVisible = true;
  isActive = false;
  isPlier = true;

  @HostBinding("@toggle")
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(
    private router: Router,
    private loginService: LoginService,
    private tokenService: TokenStorageServiceService
  ) {}

  ngOnInit() {
    this.loginService.getIsLogged().subscribe((value) => {
      this.isLogged = value;
    });
    this.loginService.getRoles().subscribe((rolesTab) => {
      this.roles = rolesTab;
    });
    this.loginService.getIdUser().subscribe((id) => {
      this.idUser = id;
    });
  }

  //ligne 1 ajouter un observable sur le scroll de la fenetre
  //2 limiter o premier evenement pou plus fluide
  //3 mappe windowobjet à pageYOffset, qui renvoie le nombre de pixels que le document fait actuellement défiler le long de l'axe vertical
  //4-5 permet d avoir un comparatif par pair entre position avant et apès defilement pr determiner le sens du scroll (vers haut ou bas)
  //distinctUntilChanged() Returns an observable sequence that contains only distinct contiguous elements
  //share() Returns an observable sequence that shares a single subscription to the underlying sequence.
  ngAfterViewInit() {
    //ligne 1
    const scroll = fromEvent(window, "scroll").pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(
        ([y1, y2]): Direction =>
          y2 > y1 && y2 > 10 ? Direction.Down : Direction.Up
      ),
      distinctUntilChanged(),
      share()
    );

    //create two streams: scrollUp$ and scrollDown$ with the use of the filter operator.
    //We also apply the share operator to the scroll$ stream, to avoid creating multiple subscriptions
    const scrollUp$ = scroll.pipe(
      filter((direction) => direction === Direction.Up)
    );

    const scrollDown$ = scroll.pipe(
      filter((direction) => direction === Direction.Down)
    );

    //We want the header to be visible when scrolling up,
    //and to be hidden when scrolling down, so we update the flag accordingly.
    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown$.subscribe(() => (this.isVisible = false));
  }

  signOut() {
    this.tokenService.signOut();
    this.loginService.setIsLoggedInfo();
    this.router.navigateByUrl("");
  }

  activate() {
    if (this.isActive) {
      this.isActive = false;
    }else{
      this.isActive = true;
    }
  }

  plier(){
    if (this.isPlier){
      this.isPlier = false;
    }else{
      this.isPlier = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/common/services/login.service';
import { TokenStorageServiceService } from 'src/app/common/services/token-storage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  roles: string [] = [];

  constructor(private router: Router, private loginService: LoginService, private tokenService: TokenStorageServiceService) { }

  ngOnInit() {
    this.loginService.getIsLoggedInfo().subscribe((value) => {
      this.isLogged = value;
    });
    this.getRoles();
  }

  signOut() {
    this.tokenService.signOut();
    this.loginService.setIsLoggedInfo(false);
  }

  getRoles() {
    this.roles = this.tokenService.getUser();
  }
}

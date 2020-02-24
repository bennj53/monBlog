import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../common/services/login.service";
import { TokenStorageServiceService } from "../common/services/token-storage-service.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../common/services/user.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService,
    private tokenStorage: TokenStorageServiceService,
    private formBuilder: FormBuilder ) { }

  ngOnInit() {
      this.initForm();
 /*   if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }*/
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  goToHome() {
    this.router.navigateByUrl("");
  }

  onSubmitForm() {
    console.log("Authentification en cours");
    const formValue = this.loginForm.value;
    console.log("Login : " + formValue["identifiant"] + " --- Password : " + formValue["password"]);
    const newUser = new User(
      formValue["identifiant"],
      formValue["password"]
    );

    this.loginService.login(formValue).subscribe(
      data => {
        console.log("Token : " + data["Authorization"]);

        // sauvegarde du token et du user en session
        this.tokenStorage.saveToken(data["Authorization"]);
        newUser.setUserRoles(data["Roles"]);
        newUser.userRoles.forEach(role => {
          console.log("User Roles : " + role);
        });
        this.tokenStorage.saveUser(newUser);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser();
        // this.reloadPage();
        console.log("Roles : " + this.roles);
      },
      err => {
        console.log("Token nullllllllllllllllllll");
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

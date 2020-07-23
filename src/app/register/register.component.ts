import { Component, OnInit } from '@angular/core';
import { LoginService } from "../common/services/login.service";
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { User } from '../models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigateByUrl("");
  }

  onSubmit(form: NgForm) {
    const user = new User(form.value["registerIdentifiant"], form.value["registerPassword"]);
    console.log("identifiant : " + user.identifiant + " ---password : " + user.password);
    this.loginService.register(user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.goToHome();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}

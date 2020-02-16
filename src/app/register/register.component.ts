import { Component, OnInit } from '@angular/core';
import { LoginService } from "../common/services/login.service";
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

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
  sdfsfd: NgModel;


  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigateByUrl("");
  }

  onSubmit() {
    this.loginService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}

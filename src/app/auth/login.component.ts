import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'auth-login',
  templateUrl : "./login.component.html",
  styles: []
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  });
  hasLoginError = false;

  constructor(
    private authService: AuthService,
    private router : Router,
    private msgAlert : ElementRef) { }

  ngOnInit() {

  }

  onSubmit(){
    this.authService.postLogin(this.loginForm.value)
      .subscribe(res => {
        this.router.navigateByUrl('/');
        localStorage.setItem('user', res.user);
        localStorage.setItem('auth-token', res.token);
      }, (err) => {
        this.hasLoginError = true;
        this.loginForm.reset();
      });
  }
}

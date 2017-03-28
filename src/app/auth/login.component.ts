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
    private router : Router) { }

  ngOnInit() {

  }

  onSubmit(){
    this.authService.postLogin(this.loginForm.value)
      .subscribe(res => {
        console.log('res', res);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('auth-token', res.token);
        this.router.navigate([res.user.username, 'edit']);
      }, (err) => {
        this.hasLoginError = true;
        this.loginForm.reset();
      });

  }
}

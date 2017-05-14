import {Component, OnInit, ViewChild, ElementRef, isDevMode} from '@angular/core';
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
    username : new FormControl('viranmalaka'),
    password : new FormControl('test123')
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
        if(res.success){
          localStorage.setItem('user', JSON.stringify(res.user));
          localStorage.setItem('auth-token', res.token);
          toastr.success('Login Success');
          this.authService.triggerLogginEvent();
          this.router.navigate([res.user.username, 'edit']);
        }
      }, (err) => {
        this.hasLoginError = true;
        this.loginForm.reset();
        toastr.error('Error');
      });

  }
}

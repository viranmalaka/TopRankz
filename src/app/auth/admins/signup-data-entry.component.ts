import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-data-entry',
  template: `
<div class="ui container">
  <div style="margin-top:50px" class="ui container computer only grid"></div>
  <div class="ui grid item">
    <div class="six wide computer ten wide tablet sixteen wide mobile column centered">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui blue image header">
            <!--img.image(src='assets/images/logo.png')-->
            <div class="content">Sign up here</div>
          </h2>
          <form class="ui form" [formGroup]="signupForm" (submit)="onSubmit()">
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input"><i class="mail icon" ></i>
                  <input type="text" name="email" placeholder="Email"  formControlName="email"/>
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input"><i class="user icon"></i>
                  <input type="text" name="username" placeholder="Username"  formControlName="username"/>
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input"><i class="lock icon"></i>
                  <input type="password" name="password" placeholder="Password"  formControlName="password"/>
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input"><i class="lock icon"></i>
                  <input type="password" name="password2" placeholder="Confirms"  formControlName="password2"/>
                </div>
              </div>
              <input type="submit" value="Sign up" class="ui fluid large blue submit button"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  `,
  styles: []
})
export class SignupDataEntryComponent implements OnInit, AfterViewInit {


  private signupForm = new FormGroup({
    username : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    password2 : new FormControl()
  });

  constructor(private authService : AuthService, private router : Router) { }

  onSubmit(){
    this.signupForm.value.acc_type = "D"; // only data entry
    if($('.ui.form').form('is valid')){
      console.log('valid');
      this.authService.postSignUp(this.signupForm.value)
        .subscribe(res => {
          if(res.success){
            localStorage.setItem('auth-token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            toastr.success('Singup successful.');
            this.router.navigate(["/"]);
          }else{
            toastr.error('something went wrong');
          }
        }, err => {
          console.log(err);
        });
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $.fn.form.settings.rules.checkName = function (value) {
      let x = $.ajax({
        url : require('../../config')['development'].domainURL + 'user/check_username',
        method : 'GET',
        data : {username : value},
        async : false,
        success : function (data) {
          return data.responseJSON;
        }
      }).responseJSON;
      if(x){
        return !x.exist;
      }else{
        return false;
      }
    };
    $.fn.form.settings.rules.checkEmail = function (value) {
      let x = $.ajax({
        url : require('../../config')['development'].domainURL + 'user/check_email',
        method : 'GET',
        data : {email : value},
        async : false,
        success : function (data) {
          console.log(data);
          return data.responseJSON;
        }
      }).responseJSON;
      if(x){
        return !x.exist;
      }else{
        return false;
      }
    };

    $('.ui.form').form({
      fields:{
        email: {
          identifier: 'email', rules: [{
            type: 'empty',
            prompt: 'Please enter the email'
          }, {
            type: 'email',
            prompt: 'Invalid Email Address'
          }, {
            type : 'checkEmail',
            prompt: 'This email address is already in use'
          }]
        },
        username: {
          identifier: 'username', rules: [{
            type: 'empty',
            prompt: 'Please enter a unique username'
          }, {
            type : 'minLength[6]',
            prompt : 'username should be at least 6 character long'
          },{
            type: 'checkName',
            prompt: 'This username has already in use'
          }]
        },
        password : {
          identifier : 'password', rules : [{
            type : 'empty',
            prompt : 'Password cannot be empty'
          },{
            type : 'minLength[5]',
            prompt : 'password should be at least 5 in length'
          }]
        },
        password2: {
          identifier : 'password2', rules : [{
            type : 'empty',
            prompt : 'Please enter the password again'
          }, {
            type : 'match[password]',
            prompt : 'Password is not match'
          }]
        }
      },
      inline : true,
      on : 'blur'
    });
  }
}

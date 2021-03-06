import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
declare let $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit, AfterViewInit{
  acc_type = 'S';

  private signupForm = new FormGroup({
    username : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    password2 : new FormControl()
  });

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {

  }

  onSubmit(){
    this.signupForm.value.acc_type = this.acc_type;
    if($('.ui.form').form('is valid')){
      console.log('valid');
      this.authService.postSignUp(this.signupForm.value)
        .subscribe(res => {
          if(res.success){
            localStorage.setItem('auth-token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            toastr.success('Singup successful.');
            this.authService.triggerLogginEvent();
            this.router.navigate([res.user.username, 'edit']);
          }else{
            toastr.error('something went wrong');
          }
        }, err => {
          console.log(err);
        });
    }
  }

  ngAfterViewInit(){
    $('.ui.radio.checkbox').checkbox();
    // new validation rule for check username availability
    $.fn.form.settings.rules.checkName = function (value) {
      let x = $.ajax({
        url : require('../config')['development'].domainURL + 'user/check_username',
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
        url : require('../config')['development'].domainURL + 'user/check_email',
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

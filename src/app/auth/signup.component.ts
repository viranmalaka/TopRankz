import {Component, OnInit, AfterViewInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.ui.radio.checkbox').checkbox();
    // new validation rule for check username availability
    $.fn.form.settings.rules.checkName = function (value) {
      return $.ajax({
        url : '/api/user/checkUserName',
        method : 'POST',
        data : {userName : value},
        async : false,
        success : function (data) {
          return data;
        }
      }).responseJSON;
    };


    $('#signupForm').form({
      fields:{
        email: {
          identifier: 'email', rules: [{
            type: 'empty',
            prompt: 'Please enter the email'
          }, {
            type: 'email',
            prompt: 'Invalid Email Address'
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

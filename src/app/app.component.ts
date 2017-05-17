import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PaperService} from "./paper/paper.service";
import {AuthService} from "./auth/auth.service";
import {OtherService} from "./other.services";
import {AttemptService} from "./paper/attempt.service";
import {QuestionService} from "./paper/question.service";
import {ClassGroupService} from "./paper/class-group.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PaperService, AuthService, OtherService, AttemptService, QuestionService, ClassGroupService]
})
export class AppComponent implements OnInit, AfterViewInit{
  user = {username : 'are you log in ?'};
  checkLogin = false;

  constructor(private authService : AuthService, private router : Router){

  }

  ngOnInit(){
    this.authService.getCheckToken().subscribe(res => {
      if(res.validity){
        this.user = JSON.parse(localStorage.getItem('user'));
        this.checkLogin = true;
      }
    });

    this.authService.loginEventSubject.subscribe(() => {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.checkLogin = true;
      if(!this.user){
        this.user = {username : 'are you log in ?'};
        this.checkLogin = false;
      }
    });

    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-bottom-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
  }

  ngAfterViewInit(){
    $('.ui.dropdown').dropdown();
  }

  logOut(){
    this.authService.getLogOut().subscribe(res => {
      this.checkLogin = false;
      localStorage.clear();
      this.router.navigate(['/']);
      this.authService.triggerLogginEvent();
    });
  }
}

import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PaperService} from "./paper/paper.service";
import {AuthService} from "./auth/auth.service";
import {OtherService} from "./other.services";
import {AttemptService} from "./paper/attempt.service";
import {QuestionService} from "./paper/question.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PaperService, AuthService, OtherService, AttemptService, QuestionService]
})
export class AppComponent implements OnInit, AfterViewInit{
  constructor(){}

  ngOnInit(){
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

  }
}

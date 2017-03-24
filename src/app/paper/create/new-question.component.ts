import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare let $: any;
declare let tinyMCE:any;
@Component({
  selector: 'app-new-question',
  templateUrl: 'new-question.component.html',
  styleUrls : []
})
export class NewQuestionComponent implements OnInit , AfterViewInit{
  numberOfAnswers = 5;
  answerArray = Array(this.numberOfAnswers).fill(0).map((x,i) => i+1);
  questionId = 0;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.questionId = this.route.snapshot.queryParams['qid'];
  }

  ngAfterViewInit(){
    $('.ui.checkbox').checkbox();

    $('.ui.dropdown').dropdown({
      allowAdditions:  true
    });

    tinyMCE.init({
      selector : '#qBody',
      skin_url: '/assets/skins/lightgray',
      statusbar : false,
      menubar : false
    });

    for(let i = 1; i <= this.numberOfAnswers; i ++){
      tinyMCE.init({
        selector : '#ans' + i,
        skin_url : '/assets/skins/lightgray',
        inline : true,
        menubar : false
      })
    }
  }

}

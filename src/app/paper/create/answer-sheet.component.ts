import {Component, OnInit, AfterViewInit} from '@angular/core';
declare let $: any;


@Component({
  selector: 'app-answer-sheet',
  templateUrl: 'answer-sheet.component.html',
  styles: []
})
export class AnswerSheetComponent implements OnInit , AfterViewInit{
  numberOfQuestions = 32;
  numberOfAnswers = 5;

  arrayOfQuestion1 = Array(Math.floor(this.numberOfQuestions/2)).fill(0).map((x,i) => i +1);
  arrayOfQuestion2 = Array(this.numberOfQuestions - Math.floor(this.numberOfQuestions/2))
    .fill(0).map((x,i) => Math.floor(this.numberOfQuestions/2) + 1 + i);

  arrayOfAnswer = Array(this.numberOfAnswers).fill(0).map((x,i) => i + 1);
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.ui.checkbox').checkbox();
    console.log(this.numberOfAnswers/2);
  }
}

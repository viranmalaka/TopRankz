import {Component, OnInit, AfterViewInit, Input, OnChanges} from '@angular/core';
declare let $: any;


@Component({
  selector: 'app-answer-sheet',
  templateUrl: 'answer-sheet.component.html',
  styles: []
})
export class AnswerSheetComponent implements OnInit , AfterViewInit, OnChanges{
  @Input() questionArray;

  numberOfQuestions = 32;
  numberOfAnswers = 5;

  arrayOfQuestion1 = [];
  arrayOfQuestion2 = [];
  arrayOfAnswer = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.ui.checkbox').checkbox();
  }

  ngOnChanges(){
    this.numberOfQuestions = this.questionArray.length;
    this.numberOfAnswers = this.questionArray[0].answers.length;

    this.arrayOfQuestion1 = Array(Math.floor(this.numberOfQuestions/2)).fill(0).map((x,i) => i +1);
    this.arrayOfQuestion2 = Array(this.numberOfQuestions - Math.floor(this.numberOfQuestions/2))
      .fill(0).map((x,i) => Math.floor(this.numberOfQuestions/2) + 1 + i);

    this.arrayOfAnswer = Array(this.numberOfAnswers).fill(0).map((x,i) => i + 1);

  }

  checkedThisAns(q, val){
    return this.questionArray[q].correct.indexOf(val) > -1;
  }

  toggleThisAns(q, val){
    if(this.questionArray[q].correct.indexOf(val) > -1) {
      this.questionArray[q].correct.splice(this.questionArray[q].correct.indexOf(val), 1);
    }else{
      this.questionArray[q].correct.push(val);
    }
  }
}

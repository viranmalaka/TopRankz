import {Component, OnInit, Input, OnChanges, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-question-container',
  template: `
<div class="ui segment" style="margin-top: 35px">
  <div [innerHTML]="question.body"></div>
  <div class="ui divider"></div>
  <div class="ui grid">
    <div class="one wide column"></div>
    <div class="fifteen wide column">
      <div class="ui grid">
        <div class="row" *ngFor="let ans of ansArray">
          <div class="one wide column">
            <!--<div class="ui radio checkbox">-->
              <!--<input type="radio" class="hidden"/>-->
              <label>{{ans + 1}}</label>
            <!--</div>-->
            
          </div>
          <div class="fifteen wide column">
            <div class="ui radio checkbox" (click)="setLastEdit(ans);">
              <input type="radio" class="hidden" name="ans" 
              [value]="question.answers[ans].id" 
              [(ngModel)]="question.givenAnswer">
              <label [innerHTML]="question.answers[ans].body"></label>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui divider"></div>
  <div class="ui grid">
    <div class="six wide column">
      <div class="ui buttons">
        <button class="ui button" (click)="navQue.emit(false)"><i class="left arrow icon"></i></button>
        <!--.or-->
        <button class="ui positive button" (click)="navQue.emit(true)"><i class="right arrow icon"></i></button>
      </div>
    </div>
    <div class="six wide column">
      <button class="ui right labeled icon green button"><i class="right arrow icon"></i>
        <div class="visible content" (click)="onSubmit.emit();">Submit</div>
      </button>
    </div>
    <div class="two wide column right floated">
      <div class="ui icon buttons">
        <button class="ui toggle button" (click)="question.flagged = !question.flagged"
            [class.green]="question.flagged"><i class="flag icon"></i></button>
      </div>
    </div>
  </div>
  <div id="quePrg" style="margin-bottom:-10px"  class="ui green bottom attached progress">
    <div class="bar"></div>
  </div>
</div>
  `,
  styles: []
})

export class QuestionContainerComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() question;
  @Output() navQue = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  @Input() viewPrecent;
  ansArray;

  constructor() { }

  ngOnInit() {
    this.ansArray = Array(this.question.answers.length).fill(0).map((x,i)=> i);
  }

  ngOnChanges(){
    if(this.question.viewAt == null){
      this.question.viewAt = new Date();
    }
    $('#quePrg').progress('set progress', this.viewPrecent);

  }

  ngAfterViewInit(){
    $(".ui.radio").checkbox();
    $('#quePrg').progress();
  }

  setLastEdit(ans){
    this.question.lastEdit = (new Date()).getTime() - this.question.viewAt.getTime();
    this.question.givenAnswer = this.question.answers[ans].id;
  };


}

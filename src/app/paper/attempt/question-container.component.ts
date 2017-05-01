import {Component, OnInit, Input, OnChanges, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-question-container',
  template: `
<div class="ui segment" style="margin-top: 35px">
  {{question.body}}
  <div class="ui divider"></div>
  <div class="ui grid">
    <div class="one wide column"></div>
    <div class="fifteen wide column">
      <div class="ui grid">
        <div class="row" *ngFor="let ans of question.answers">
          <div class="one wide column">
            <div class="ui radio checkbox">
              <input type="radio" name="fruit" class="hidden"/>
              <label>{{ans.id}}</label>
            </div>
          </div>
          <div class="fifteen wide column">{{ans.body}}</div>
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
        <div class="visible content">Submit</div>
      </button>
    </div>
    <div class="two wide column right floated">
      <div class="ui icon buttons">
        <button class="ui toggle button"><i class="flag icon"></i></button>
      </div>
    </div>
  </div>
  <div id="quePrg" style="margin-bottom:-10px" data-value="10"
       data-total="20" class="ui green bottom attached progress">
    <div class="bar"></div>
  </div>
</div>
  `,
  styles: []
})
export class QuestionContainerComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() question;
  @Output() navQue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.ngAfterViewInit();
  }

  ngAfterViewInit(){
    $(".ui.radio").checkbox();
  }

}

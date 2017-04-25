import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PaperService} from "../paper.service";

@Component({
  selector: 'app-view-question',
  template: `
<div class="fourteen wide column" >
    <div class="ui segment">
      <div style="font-size:15px" class="ui top attached label">
        <div class="ui grid">
          <div class="one wide column">{{question.questionNumber}}</div>
        </div>
      </div>
        <div class="ui segment" style="margin-top: 35px">
          {{question.body}} - body
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
                <button class="ui button" (click)="prevQue()"><i class="left arrow icon"></i></button>
                <!--.or-->
                <button class="ui positive button" (click)="nextQue()"><i class="right arrow icon"></i></button>
              </div>
            </div>
          </div>
        </div>
      <pre></pre>
      <div class="ui bottom attached label">
        <div style="float:left">Tag list here</div>
        <div style="float:right">Hardness Level</div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class ViewQuestionComponent implements OnInit , OnChanges{
  @Input() question;
  @Output() nav = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){

  }

  nextQue(){
    this.nav.emit(true);
  }

  prevQue(){
    this.nav.emit(false);
  }
}

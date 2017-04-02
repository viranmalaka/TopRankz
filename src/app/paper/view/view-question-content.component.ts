import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-question-content',
  template: `
{{question}} - asdf
<div class="ui divider"></div>
<div class="ui grid">
  <div class="one wide column"></div>
  <div class="fifteen wide column">
    <div class="ui grid">
      <div class="row" *ngFor="let ans of answers">
        <div class="one wide column">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit" class="hidden"/>
            <label>{{'sd'}}</label>
          </div>
        </div>
        <div class="fifteen wide column">{{ans}}</div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class ViewQuestionContentComponent implements OnInit {
  question = 'this is the question';
  answers = ['answer 1', 'answer 2', 'answer 3', 'answer 4', 'answer 5'];

  constructor() { }

  ngOnInit() {
  }

}

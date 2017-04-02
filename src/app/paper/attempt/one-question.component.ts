import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-one-question',
  template: `
{{question}}
<div class="ui divider"></div>
<div class="ui grid">
  <div class="one wide column"></div>
  <div class="fifteen wide column">
    <div class="ui grid">
      <div class="row" *ngFor="let ans of answers">
        <div class="one wide column">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit" class="hidden"/>
            <label>01</label>
          </div>
        </div>
        <div class="fifteen wide column">answer</div>
      </div>
    </div>
  </div>
</div>
`,
  styles: []
})

@ViewChild('radiobuttons')
export class OneQuestionComponent implements OnInit , AfterViewInit{

  question = 'this is the question';
  answers = ['answer 1', 'answer 2', 'answer 3', 'answer 4', 'answer 5'];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.ui.radio.checkbox').checkbox();

  }
}

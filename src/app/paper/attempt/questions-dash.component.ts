import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-dash',
  template: `
<div class="fourteen wide column">
    <div class="ui segment">
      <div style="font-size:15px" class="ui top attached label">
        <div class="ui grid">
          <div class="one wide column">01</div>
          <div class="nine wide column"></div>
          <div class="three wide right floated column">
            {{('0' + min).slice(-2)}} : {{('0' + sec).slice(-2)}}
          </div>
          <div style="height:10px" class="three wide right floated column">
            <div id="timePrg" class="ui indicating small progress">
              <div class="bar"></div>
            </div>
          </div>
        </div>
      </div>
        <app-question-container></app-question-container>
      <pre>{{formData}}</pre>
      <div class="one wide column">
        <div class="ui lable">a</div>
      </div>
      <div class="ui bottom attached label">
        <div style="float:left">Tag list here</div>
        <div style="float:right">you have done this 3 times before</div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class QuestionsDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
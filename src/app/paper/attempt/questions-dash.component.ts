import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-questions-dash',
  template: `
<div class="fourteen wide column" >
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
      <div class="autumn">
        <app-question-container></app-question-container>
      </div>
      <pre></pre>
      <div class="ui bottom attached label">
        <div style="float:left">Tag list here</div>
        <div style="float:right">you have done this 3 times before</div>
      </div>
    </div>
  </div>
  <br>
  <button class="ui button">Answer Sheet</button>
  <button class="ui button">Finish Attempt</button>
  `,
  styles: []
})
export class QuestionsDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  back(){
    console.log('back');
    $('.autumn')
      .transition('fade left','200ms')
      .transition('fade right', '200ms')
    ;
  }

  next(){
    $('.autumn')
      .transition('fade right')
      .transition('fade left')
    ;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-card',
  template: `
    <div class="ui raised link card" >
      <div class="content">
        <div class="header">{{  }}</div>
        <div class="meta"><span class="category">you have done this {{doneBefore}}</span></div>
        <div class="description">
          p {{numberOfQuestions}} - questions : {{timeLimit}} - minites
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
          <button class="ui tiny button disabled">show results</button>
        </div>
        <div class="left floated author">
          <button class="ui tiny button">take attempt</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PaperCardComponent implements OnInit {
  name = 'Demo Name';
  doneBefore = 3;
  numberOfQuestions = 60;
  timeLimit = 120;
  constructor() { }

  ngOnInit() {
  }

}

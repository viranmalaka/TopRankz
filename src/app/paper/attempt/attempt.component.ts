import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempt',
  template: `
<div class="ui grid">
  <div style="overflow-y:scroll; height:93vh;" class="three wide column" *ngIf="started">
    <div class="ui vertical pointing menu"   style="margin-left: 5px;">
      <a ng-repeat="x in getnQuestions()" id="qLink{{x}}" class="item">
        Question {{('0' + x).slice(-2)}}
      </a>
      <a class="item">Answer Sheet</a>
      <a class="item">Submit Paper</a>
    </div>
  </div>
  <div class="ui two wide column" *ngIf="!started"></div>
  <div style="margin-top : 20px" class="ui twelve wide column">
    <router-outlet></router-outlet>
  </div>
</div>
`,
  styles: []
})
export class AttemptComponent implements OnInit {
  started = true;
  constructor() { }

  ngOnInit() {
  }

}
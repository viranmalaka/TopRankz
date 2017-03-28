import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempt',
  template: `
<div class="ui grid">
  <div style="overflow-y:scroll; height:90vh;" class="three wide column" *ngIf="started">
    <div class="ui vertical pointing menu"   style="margin-left: 5px;">
      <a *ngFor="let x of arrayQuestions" id="qLink{{x}}" class="item">
        Question {{('0' + x).slice(-2)}}
      </a>
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
  numberOfQuestions = 50;
  arrayQuestions = Array(this.numberOfQuestions).fill(0).map((x,i) => i + 1);
  constructor() { }

  ngOnInit() {
  }

}

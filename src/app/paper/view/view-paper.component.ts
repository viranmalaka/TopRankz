import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-paper',
  template: `
<div class="ui grid">
  <div style="margin-left: 5px" class="three wide column" *ngIf="started">
    <button *ngFor="let x of arrayQuestions" id="qLink{{x}}">
      {{('0' + x).slice(-2)}}
    </button>
  </div>
  <div class="ui two wide column" *ngIf="!started"></div>
  <div style="margin-top : 20px" class="ui twelve wide column">
    <router-outlet></router-outlet>
  </div>
</div>
  `,
  styles: []
})
export class ViewPaperComponent implements OnInit {
  started = true;
  numberOfQuestions = 50;
  arrayQuestions = Array(this.numberOfQuestions).fill(0).map((x,i) => i + 1);
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {AttemptService} from "../attempt.service";

@Component({
  selector: 'app-attempt-history',
  template: `
<div class="ui grid">
  <div class="ui three wide column">
  </div>
  <div class="ui thirteen wide column">
    
    <div class="ui cards">
      <div class="ui raised link card" *ngFor="let x of attemptList">
        <div class="content">
          <div class="header">{{ x.paper.name }}</div>
          <div class="description">
            Correct Answers : {{ x.answers }}/{{ x.paper.questions }} <br>
            Percentage : {{ x.answers * 100 / x.paper.questions }} %
          </div>
        </div>
        <div class="ui bottom attached button" routerLink="/paper/attempt/review/{{x.id}}">
          <i class="external icon"></i>
          Review This
        </div>
      </div>
    </div>
      
  </div>    
</div>
  `,
  styles: []
})
export class AttemptHistoryComponent implements OnInit {
  attemptList = [];

  constructor(private attemptService : AttemptService) { }

  ngOnInit() {
    this.attemptService.getAttemptHistory().subscribe(res => {
      if(res.success){
        this.attemptList = res.data;
        for (let i = 0; i < this.attemptList.length; i++) {
          this.attemptList[i].answers = this.attemptList[i].answers.filter(function (val) {
            return val == true;
          }).length;
        }

      }
    });
  }

}

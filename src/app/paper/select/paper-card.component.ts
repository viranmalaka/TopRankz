import {Component, OnInit, Input} from '@angular/core';
import {PaperService} from "../paper.service";

@Component({
  selector: 'app-paper-card',
  template: `
    <div class="ui raised link card" style="margin-top: 20px;" >
      <div class="content">
        <div class="header">{{ paperData.name }}</div>
        <div class="meta"><span class="category" *ngIf="paperData.viewMode == 'S'">you have done this {{paperData.doneBefore}}</span></div>
        <div class="description">
          <p>{{paperData.numberOfQuestions}} - questions</p> 
          <p>{{paperData.timeLimit}} - minutes</p> 
          <p *ngIf="paperData.viewMode == 'D'">added by : {{paperData.addedBy}}</p>
        </div>
      </div>
      <div class="extra content" *ngIf="paperData.viewMode == 'S'">
        <div class="left floated author">
          <button class="ui tiny button" routerLink="/paper/attempt/{{paperData.id}}">Take Attempt</button>
        </div>
      </div>
      <div class="extra content" *ngIf="paperData.viewMode == 'V' || paperData.viewMode=='T' || paperData.viewMode=='D'">
        <div class="right floated author">
          <button class="ui tiny button" routerLink="/paper/{{paperData.id}}">View Paper</button>
        </div>
        <div class="left floated author" *ngIf="paperData.viewMode == 'D'">
          <button class="ui tiny button">Proof Reading</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PaperCardComponent implements OnInit{

  @Input() paper;
  paperData = {
    name : '',
    numberOfQuestions : 0,
    timeLimit : 0,
    viewMode : '',
    addedBy : '',
    id : 0
  };

  constructor(private paperService : PaperService) {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.paperData.viewMode = user.acc_type;
    }else{
      this.paperData.viewMode = 'V';
    }
  }

  ngOnInit() {
    this.paperService.getPaper(this.paper._id)
      .subscribe(res => {
        this.paperData.name = res.paper.name;
        this.paperData.numberOfQuestions = res.paper.questions;
        this.paperData.timeLimit = res.paper.time_limit;
        this.paperData.id = res.paper.id;
        if(this.paperData.viewMode == 'D'){
          console.log(res.paper);
          this.paperData.addedBy = res.paper.addedBy.username;
        }
      });

  }
}

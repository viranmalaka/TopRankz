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
        <div class="right floated author">
          <button class="ui tiny button">Show Results</button>
        </div>
        <div class="left floated author">
          <button class="ui tiny button">Take Attempt</button>
        </div>
      </div>
      <div class="extra content" *ngIf="paperData.viewMode != 'S'">
        <div class="right floated author">
          <button class="ui tiny button">View Paper</button>
        </div>
        <div class="left floated author" *ngIf="paperData.viewMode != 'V'">
          <button class="ui tiny button">Proof Reading</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PaperCardComponent implements OnInit {

  @Input() paper;
  paperData = {
    name : '',
    numberOfQuestions : 0,
    timeLimit : 0,
    viewMode : 'D',
    addedBy : ''
  };

  constructor(private paperService : PaperService) { }

  ngOnInit() {
    this.paperService.getPaper(this.paper._id)
      .subscribe(res => {
        console.log(res);
        this.paperData.name = res.paper.name;
        this.paperData.numberOfQuestions = res.paper.questions;
        this.paperData.timeLimit = res.paper.time_limit;
        if(this.paperData.viewMode == 'D'){
          this.paperData.addedBy = res.paper.addedBy.username;
        }
      });

  }

}

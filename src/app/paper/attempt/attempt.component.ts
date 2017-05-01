import {Component, OnInit, OnChanges} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PaperService} from "../paper.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-attempt',
  template: `
<div class="ui grid">
  <div class="three wide column" *ngIf="started">
    <div class="ui vertical pointing menu">
      <div class="item">
        <div class="menu" style="margin-left:1px;">
          <a class="ui icon black button" [class.basic]="!x.flagged" 
                [class.yellow]="x.viewAt!=null && x.givenAnswer==0"
                [class.teal]="x.givenAnswer!=0"
                
          style="margin-top:3px;font-size:12px" 
          *ngFor="let x of questions" id="qLink{{x}}" (click)="changeQuestion(x.questionNumber)">
            {{('0' + x.questionNumber).slice(-2)}}
            
          </a>
        </div>
      </div>
      <div class="header cursorHand" (click)="state = 'A'"><a>Answer Sheet</a></div>
      <div class="header cursorHand" (click)="state = 'F'"><a>Submit Paper</a></div>
    </div>
  </div>
  <div class="ui two wide column" *ngIf="!started"></div>
  <div style="margin-top : 20px" class="ui twelve wide column">
    <app-start-paper *ngIf="state == 'S'" (takeAttempt)="startAttempt()" [paper]="paper">
    </app-start-paper>
    
    <app-questions-dash *ngIf="state == 'Q' || questionDashBoardShowing" 
    [question]="questions" [time]="time" 
      [totalTime]="paper.time_limit" [selectedQue]="selectedQue" [viewCount]="viewedCount"
      [class.hideMe]="!(state=='Q')" (changeQ)="changeQuestion($event)"></app-questions-dash>
    
    <app-attempt-answer-sheet *ngIf="state=='A' || questionDashBoardShowing"
      [class.hideMe]="state!='A'"></app-attempt-answer-sheet>
      
    <app-attempt-submit-paper *ngIf="state=='F'"
    ></app-attempt-submit-paper>
      
  </div>
  
  <button (click)="print()">print</button>
</div>
`,
  styles: [".cursorHand { cursor: pointer } .hideMe{display: none;}"]
})
export class AttemptComponent implements OnInit{
  state = 'S';
  started = false;
  paper = {
    _id : '',
    name : '',
    questions : 0,
    time_limit:0,
    before : 0,
    avg : 0
  };

  selectedQue = 0;
  questions = [];

  startedAtServer;
  startedAtClient;
  viewedCount = 0;
  time;
  questionDashBoardShowing = false;
  questionAnswerSheetShowing = false;

  constructor(private router : Router, private route : ActivatedRoute,
              private paperService : PaperService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      console.log('id', params['id']);
      if (params['id'] && params['id'] != '..') {
        this.paperService.getPaperById(params['id']).subscribe(res => {
          if(res.success){
            this.paper = res['paper'];
            this.paperService.getQuestionsOfPaper(this.paper._id)
              .subscribe(res => {
                this.questions = res['questions'];
                this.startedAtServer = res['timeStamp'];
                this.startedAtClient = new Date();
                for(let i = 0; i < this.questions.length; i++){
                  this.questions[i]['viewAt'] = null;
                  this.questions[i]['givenAnswer'] = 0;
                  this.questions[i]['flagged'] = false;
                }
                console.log(this.questions);
              });
          }else{
            toastr.error('no paper found');
            this.router.navigate(['..', '..'], {relativeTo : this.route});
          }
        });
      }else{
        this.router.navigate(['..'], {relativeTo : this.route});
      }
    });
  }

  startAttempt(){
    this.paperService.getStartAttempt().subscribe(res => {
      if(res.success){
        this.startedAtServer = res['time'];
      }
    });
    this.started = true;
    this.changeQuestion(1);
    Observable.timer(1000,1000).subscribe(t => {
      this.time = t;
    });
    this.questionDashBoardShowing = true;
    this.state = "Q";
  }

  changeQuestion(n){
    this.state = 'Q';
    if(this.questions[n-1].viewAt == null){
      this.questions[n-1].viewAt = new Date();
      this.viewedCount ++;
    }
    this.selectedQue = n;
    console.log('changin here');
  }

  print(){
    console.log(this.questions);
  }

}


//classes for different states
/*
init - basic + black
viewed - basic + yello
answered - basic + teal
flagged - green
 */

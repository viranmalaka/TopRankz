import {Component, OnInit, OnChanges} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PaperService} from "../paper.service";
import {Observable} from "rxjs";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-attempt',
  template: `
<div class="ui grid">
  <div class="three wide column" *ngIf="started">
    <div class="ui vertical pointing menu">
      <div class="item">
        <div class="menu" style="margin-left:1px;">
          <a class="ui icon black button" [class.basic]="!x.flagged" 
                [class.blue]="x.viewAt!=null && x.givenAnswer==0"
                [class.teal]="x.givenAnswer!=0"
                
          style="margin-top:3px;font-size:12px" 
          *ngFor="let x of questions" id="qLink{{x}}" (click)="changeQuestion(x.questionNumber)">
            {{('0' + x.questionNumber).slice(-2)}}
            
          </a>
        </div>
      </div>
      <div class="header cursorHand menuLeftMargin" (click)="state = 'A'"><a>Answer Sheet</a></div>
      <div class="header cursorHand menuLeftMargin" (click)="onFinishAttemptClick()"><a>Finish Paper</a></div>
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
      [class.hideMe]="state!='A'" [questionArray]="questions"></app-attempt-answer-sheet>
      
     <button (click)="print()">pring</button>
     
  </div>
</div>

<!--//TODO set the modal view-->
<div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    Finish and Submit the paper
  </div>
  <div class="image content">
    <div class="description">
      <div class="ui header">We've auto-chosen a profile image for you.</div>
      <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      No
    </div>
    <div class="ui positive right labeled icon button" (click)="submitAttempt()">
      Submit Paper
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>
`,
  styles: [".cursorHand { cursor: pointer } .hideMe{display: none;} .menuLeftMargin{margin-left:20px;}"]
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
              private paperService : PaperService, private authService : AuthService) { }

  ngOnInit() {
    this.authService.getCheckToken().subscribe(res => {
      if(res.success){
        if(JSON.parse(localStorage.getItem('user')).acc_type == 'S'){
          this.route.params.subscribe((params : Params) => {
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
                        this.questions[i]['lastEdit'] = null;
                        this.questions[i]['givenAnswer'] = 0;
                        this.questions[i]['flagged'] = false;
                      }
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
        }else{
          toastr.error('you are not allowed here');
          this.router.navigate(['/']);
        }
      }else{
        this.router.navigate(['login']);
      }
    });
  }

  startAttempt(){
    this.paperService.getStartAttempt(this.paper._id).subscribe(res => {
      if(res.success){
        this.startedAtServer = res['time'];
        this.started = true;
        this.changeQuestion(1);
        Observable.timer(1000,1000).subscribe(t => {
          this.time = t;
        });
        this.questionDashBoardShowing = true;
        this.state = "Q";
      }
    });

  }

  changeQuestion(n){
    this.state = 'Q';
    if(this.questions[n-1].viewAt == null){
      this.questions[n-1].viewAt = new Date();
      this.viewedCount ++;
    }
    this.selectedQue = n;
  }

  onFinishAttemptClick(){
    $('.ui.modal').modal('show');
  }

  submitAttempt(){
    console.log(this.questions);
    let attempts = Array(this.questions.length).fill({});
    this.extractSubmittingData(0, attempts, function (arr) {

    });
  }

  extractSubmittingData(index, arr, next){
    if(index == arr.length){
      next(arr);
    }else{
      arr[index] = {
        qId : this.questions[index]['_id'],
        viewAt : this.questions[index]['viewAt'],
        lastEdit : this.questions[index]['lastEdit'],
        givenAnswer : this.questions[index]['givenAnswer']
      };
      this.extractSubmittingData(index + 1, arr, next);
    }
  }

  print(){
    console.log(this.questions[this.selectedQue]);
  }
}

//classes for different states
/*
init - basic + black
viewed - basic + yello
answered - basic + teal
flagged - green
current
 */

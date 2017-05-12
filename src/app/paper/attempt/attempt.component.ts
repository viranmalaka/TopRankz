import {Component, OnInit, OnChanges} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PaperService} from "../paper.service";
import {Observable} from "rxjs";
import {AuthService} from "../../auth/auth.service";
import {AttemptService} from "../attempt.service";

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
      [class.hideMe]="!(state=='Q')" (changeQ)="changeQuestion($event)"
      (onSubmit)="submitAttempt()"
      ></app-questions-dash>
    
    <app-attempt-answer-sheet *ngIf="state=='A' || questionDashBoardShowing"
      [class.hideMe]="state!='A'" [questionArray]="questions"></app-attempt-answer-sheet>
     
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
    <div class="ui positive right labeled icon button" (click)="submitFinal()">
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
  attemptID;

  constructor(private router : Router, private route : ActivatedRoute,
              private paperService : PaperService, private attemptService : AttemptService,
              private authService : AuthService) { }

  ngOnInit() {
    this.authService.getCheckToken().subscribe(res => {
      if(res.success){
        if(JSON.parse(localStorage.getItem('user')).acc_type == 'S'){
          this.route.params.subscribe((params : Params) => {
            if (params['id'] && params['id'] != '..') {
              this.paperService.getPaperById(params['id']).subscribe(res => {
                if(res.success){
                  this.paper = res['paper'];
                  console.log(this.paper._id);
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
    this.attemptService.getStartAttempt(this.paper._id).subscribe(res => {
      if(res.success){
        // this.attemptService.setServerTimeout(this.paper._id).subscribe(res => {
        //   if(res.success){
        //     this.submitFinal();
        //   }
        // });
        this.startedAtServer = res['time'];
        this.started = true;
        this.changeQuestion(1);
        Observable.timer(1000,1000).subscribe(t => {
          this.time = t;
        });
        this.questionDashBoardShowing = true;
        this.state = "Q";
        this.attemptID = res['attemptID'];
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
    let attempts = Array(this.questions.length).fill({});
    for (let i = 0; i < this.questions.length; i++) {
      let obj = this.questions[i];
      attempts[i] = {
        qId : obj['_id'],
        viewAt : obj['viewAt'],
        lastEdit : obj['lastEdit'],
        givenAnswer : obj['givenAnswer']
      };
    }
    this.attemptService.saveAttemptTemp({attemptID : this.attemptID, answersData : attempts})
      .subscribe(res => {
        if(res.success){
          toastr.success('ok');
        }
      });
  }

  submitFinal(){
    this.submitAttempt();
    this.attemptService.saveAttemptFinished({
      attemptID : this.attemptID
    }).subscribe(res => {
      if(res.success){
        toastr.success('submitted data success');
      }
    });
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

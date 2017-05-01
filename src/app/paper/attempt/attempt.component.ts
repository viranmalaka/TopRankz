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
          <a class="ui icon button" 
          style="margin-top:3px;font-size:12px" 
          *ngFor="let x of questions" id="qLink{{x}}" (click)="changeQuestion(x.questionNumber)">
            {{('0' + x.questionNumber).slice(-2)}}
          </a>
        </div>
      </div>
      <div class="header cursorHand" ><a>Answer Sheet</a></div>
      <div class="header cursorHand"><a>Submit Paper</a></div>
    </div>
  </div>
  <div class="ui two wide column" *ngIf="!started"></div>
  <div style="margin-top : 20px" class="ui twelve wide column">
    <app-start-paper *ngIf="state == 'S'" (takeAttempt)="startAttempt()" [paper]="paper">
    </app-start-paper>
    
    <app-questions-dash *ngIf="state == 'Q' || questionsShowing" 
    [question]="questions" [time]="time" 
      [totalTime]="paper.time_limit" [selectedQue]="selectedQue"
      [class.hideMe]="!(state=='Q' && questionsShowing)"></app-questions-dash>
    
  </div>
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
  questionsShowing = false;

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
    this.questionsShowing = true;
    this.state = "Q";
  }

  changeQuestion(n){
    // if(!this.questions[n-1]['body']){
    //   this.paperService.getQuestionInAttempt(this.questions[n-1]._id).
    //     subscribe(res => {
    //       if(res.success){
    //         this.questionLoaded ++;
    //         this.questions[n-1] = res['question'];
    //         this.selectedQue = n;
    //      }
    //   });
    //
    // }
    if(this.questions[n-1].viewAt == null){
      this.questions[n-1].viewAt = new Date();
      this.viewedCount ++;
    }
    this.selectedQue = n;
  }

}

import {Component, OnInit, AfterViewInit, isDevMode} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {PaperService} from "../paper.service";
import {AuthService} from "../../auth/auth.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-paper',
  template: `
<div class="ui grid">
  <div class="ui three wide column">
    <div class="ui vertical pointing menu" *ngIf="started">
      <!--<div class="ui vertical menu">-->
        <div class="item">
          <div class="header cursorHand" ><a (click)="state == 'C'">Start</a></div>
          <div class="menu" style="margin-left: 1px">
            <button style="margin-top:3px;font-size:12px" class="ui icon button" *ngFor="let q of questionsArray"
                  (click)="state = 'Q'; currentQuestionIndex = q.questionNumber - 1">
              {{('0' + q.questionNumber).slice(-2)}}
            </button>
            <button class="ui icon button green" style="margin-top:2px;font-size:12px">
              007
            </button>
          </div>
          <div class="header cursorHand" style="margin-top: 10px;"><a (click)="state = 'A'">Answer sheet</a></div>
          <div class="header cursorHand"><a (click)="state = 'S'">Submit Paper</a></div>
        </div>
      <!--</div>-->
    </div>
  </div>
  <div style="margin-top : 20px" class="ui eleven wide column">
    <app-new-paper *ngIf="state == 'C'" (onSubmitForm)="onSubmitNewPaper($event)"></app-new-paper>
    <app-answer-sheet *ngIf="state == 'A' && started" ></app-answer-sheet>
    <app-submit-paper *ngIf="state == 'S' && started"></app-submit-paper>
    <app-new-question *ngIf="state == 'Q' && started" 
        [question]="questionsArray[currentQuestionIndex]"
        ></app-new-question>
  </div>
</div>
`,

  styles: [".cursorHand { cursor: pointer }"]
})

export class CreatePaperComponent implements OnInit, AfterViewInit {
  state = 'C';
  started = false;
  private paper;
  private questionsArray = [];
  private user = JSON.parse(localStorage.getItem('user'));
  private currentQuestionIndex = -1;

  constructor(private route:ActivatedRoute, private paperService : PaperService,
            private authService : AuthService, private router : Router){}

  ngOnInit() {
    this.authService.getCheckToken().subscribe(res => {
      if(res.success && res.validity){
        if(this.user.acc_type == 'S'){
          toastr.error('you are not allowed here.');
          this.router.navigate(['/']);
        }else{
          //good to go.
          // check if paper id exist or not
          if(this.route.snapshot.params['paper_id']){
            //load the paper and states = 'C'
            this.paperService.editThisPaper(this.route.snapshot.params['paper_id'])
              .subscribe(res => {
                console.log(res);
                if(res['can']){
                  this.started = true;
                  this.paper = res['paper'];
                  this.questionsArray = res['questions'];
                }
              })
          }else{
            this.started = false;
            this.state = 'C';
          }
        }
      }else{
        this.router.navigate(['login']);
      }
    });
  }

  ngAfterViewInit(){
  }

  onSubmitNewPaper(formControl : FormControl){
    this.paperService.postCreateNewPaper(formControl.value)
      .subscribe(res => {
        if(res.success){
          toastr.success('paper saved. Now you can enter questions');
          localStorage.setItem('paper', JSON.stringify(res['paper']));
          this.paper = res['paper'];
          this.currentQuestionIndex = 0;
          this.questionsArray = res['questions'];
          this.state = 'Q';
          this.started = true;
        }else{

        }
      });
  }
}

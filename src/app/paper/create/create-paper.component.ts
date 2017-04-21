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
          <div class="header cursorHand" ><a (click)="onMenuChange('C')">Basic Data</a></div>
          <div class="header cursorHand" ><a (click)="onMenuChange('D')">Description</a></div>
          <div class="menu" style="margin-left: 1px">
            <button style="margin-top:3px;font-size:12px" class="ui icon button" *ngFor="let q of questionsArray"
                  (click)="onMenuChange('Q', q.questionNumber - 1)">
              {{('0' + q.questionNumber).slice(-2)}}
            </button>
          </div>
          <div class="header cursorHand" style="margin-top: 10px;"><a (click)="onMenuChange('A')">
          Answer sheet</a></div>
          <div class="header cursorHand"><a (click)="onMenuChange('S')">Submit Paper</a></div>
        </div>
      <!--</div>-->
    </div>
  </div>
  <div style="margin-top : 20px" class="ui eleven wide column">
    <app-new-paper *ngIf="state == 'C'" 
            (onSubmitForm)="onSubmitNewPaper($event)"
            [paper]="paper"></app-new-paper>
    
    <app-description *ngIf="(state == 'D' && started) || loadDescriptionOnce" 
          [des]="paper.descriptionText" (onSubmitDes)="setDescription($event)"
          [class.hideMe]="!(state == 'D' && started)"  ></app-description>
            
    <app-answer-sheet *ngIf="state == 'A' && started" 
            [questionArray]="questionsArray"></app-answer-sheet>
    <app-submit-paper *ngIf="state == 'S' && started"
            [questionArray]="questionsArray" [paper]="paper"
    ></app-submit-paper>
    
    <app-new-question *ngIf="(state == 'Q' && started) || loadQuestionOnce" 
        [question]="questionsArray[currentQuestionIndex]"
        [subject]="paper.subject"
        [class.hideMe]="!(state == 'Q' && started)"
        (onSubmitChanges)="submitChanges()"></app-new-question>
        
  </div>
</div>
`,

  styles: [".cursorHand { cursor: pointer } .hideMe{display: none;}"]
})

export class CreatePaperComponent implements OnInit, AfterViewInit {
  state = '';
  started = false;
  private paper;
  private questionsArray = [];
  private user = JSON.parse(localStorage.getItem('user'));
  private currentQuestionIndex = -1;
  private loadQuestionOnce = false;
  private loadDescriptionOnce = false;


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
                  this.paper = res['paper'];
                  this.questionsArray = res['questions'];
                  this.started = true;
                  this.state = 'C';
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
          this.router.navigate([this.paper.id], {relativeTo : this.route})
        }else{

        }
      });
  }

  setDescription(des : String){
    this.paperService.setDescription(this.paper._id, des)
      .subscribe(res => {
        console.log(res);
        if(res.success){
          this.paper = res['paper'];
          toastr.success('save description');
        }
      });
  }







  onMenuChange(state, newIndex){
    this.state = state;
    if(state == 'D'){
      this.loadDescriptionOnce = true;
    }else if(state == 'Q'){

      this.currentQuestionIndex = newIndex;
      this.loadQuestionOnce = true;
    }
  }

  submitChanges(){ // submit all questions
    this.paperService.submitAllQuestions(this.questionsArray)
      .subscribe(res => {
        if (res.success) {
          toastr.success('save changes');
        }
      });
  }
}


import {Component, OnInit, AfterViewInit, isDevMode} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {PaperService} from "../paper.service";
import {start} from "repl";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-create-paper',
  template: `
<div class="ui grid">
  <div class="ui three wide column">
    <div class="ui vertical pointing menu" *ngIf="started">
      <div class="ui vertical menu">
        <div class="item">
          <div class="header"><a (click)="state == 'C'">Start</a></div>
          <div class="menu">
            <a href="?id=1" style="font-size:12px" class="item" *ngFor="let q of arrayQuestions"
                  (click)="state = 'Q'">
              Question {{q.questionNumber}}
            </a>
          </div>
          <div class="header"><a (click)="state = 'A'">Answer sheet</a></div>
          <div class="header"><a (click)="state = 'S'">Submit Paper</a></div>
        </div>
      </div>
    </div>
  </div>
  <div style="margin-top : 20px" class="ui eleven wide column">
    <app-new-paper *ngIf="state == 'C'" (onSubmitState)="stateChange($event)"></app-new-paper>
    <app-answer-sheet *ngIf="state == 'A' && started"></app-answer-sheet>
    <app-submit-paper *ngIf="state == 'S' && started"></app-submit-paper>
    <app-new-question *ngIf="state == 'Q' && started"></app-new-question>
  </div>
</div>

`,
  styles: []
})


export class CreatePaperComponent implements OnInit, AfterViewInit {
  state = 'C';
  started = false;
  private numberOfQuestions = 50;
  private arrayQuestions = [];
  private user = JSON.parse(localStorage.getItem('user'));

  constructor(private route:ActivatedRoute, private paperService : PaperService,
            private authService : AuthService, private router : Router){}

  ngOnInit() {
    this.authService.getCheckToken().subscribe(res => {
      if(!res.validity){
        this.router.navigate(['login']);
      }else{
        if(this.user.acc_type == 'S'){
          toastr.error('You are not allowed here');
          this.router.navigate(['/']);
        }
      }
    }, err => {
      if(isDevMode()){
        toastr.error(err._body);    // toastr the server error messages
      }else{
        toastr.error('Error');      // toastr custome msg
      }
    });
    //should check login
    if(this.route.snapshot.params['paper_id']){
      this.paperService.getCanEditThisPaper(this.route.snapshot.params['paper_id'])
        .subscribe(res => {
          console.log('can edit' ,res);
          this.started = res['can'];
        });
    }else{
      this.started = false;
    }

    this.numberOfQuestions = localStorage.getItem('paper') ?
      JSON.parse(localStorage.getItem('paper')).questions : 0;

    for (let i = 0; i < this.numberOfQuestions; i++) {
      this.arrayQuestions.push({
        body : "",
        answers : [],
        correct : [],
        tags : [],
        topics : [],
        questionNumber : i + 1,
        mixOrder : true
      });

    }

  }

  ngAfterViewInit(){
  }

  stateChange(state : string){
    this.state = state;
    this.ngOnInit();
  }
}

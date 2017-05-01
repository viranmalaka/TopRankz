import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PaperService} from "../paper.service";

@Component({
  selector: 'app-view-paper',
  template: `
<div class="ui grid">
  <div style="margin-left: 5px" class="three wide column" *ngIf="started">
    <div class="ui vertical pointing menu">
      <div class="item">
        <div class="menu" style="margin-left:1px;">
          <a class="ui icon button" 
          style="margin-top:3px;font-size:12px" 
          *ngFor="let x of arrayQuestions" id="qLink{{x}}"
          routerLink="../{{x}}" [class.green]="selectedQueId == x">
            {{('0' + x).slice(-2)}}
          </a>
        </div>
      </div>
    </div>
  
    
  </div>
  <div class="ui two wide column" *ngIf="!started"></div>
  <div style="margin-top : 20px" class="ui twelve wide column">
    <app-view-question [question]="question" (nav)="navigateQue($event)"></app-view-question>
  </div>
</div>
  `,
  styles: []
})
export class ViewPaperComponent implements OnInit {
  started = true;
  numberOfQuestions;
  arrayQuestions;
  paper = null;
  question = {
    questionNumber : 0,
    body : '',
    answers : [],
    tags : []
  };
  selectedQueId = '';

  constructor(private route : ActivatedRoute, private paperService : PaperService,
              private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.selectedQueId = params['id'];
      this.paperService.getPaperById(params['paper_id']).subscribe(res => {
        if (res.success) {
          this.paper = res['paper'];
          this.numberOfQuestions = this.paper.questions;
          this.arrayQuestions = Array(this.numberOfQuestions).fill(0).map((x, i) => i + 1);

          if(params['id']){
            this.paperService.getQuestion(this.paper._id, this.selectedQueId)
              .subscribe(res => {
                if(res.success){
                  this.question = res['question'];
                }else{
                  this.router.navigate(['..','1'], {relativeTo : this.route});
                }
              })
          }else {
            this.router.navigate(['1'], {relativeTo : this.route});
          }
        }
      });
    });
  }

  navigateQue(n){
    this.router.navigate(['..', parseInt(this.selectedQueId) +  (n ? +1: -1)],
      {relativeTo : this.route});
  }


}

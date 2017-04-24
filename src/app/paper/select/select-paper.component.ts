import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PaperService} from "../paper.service";
import {raceStatic} from "rxjs/operator/race";

@Component({
  selector: 'app-select-paper',
  template: `
<div class="ui grid">
  <div class="one wide column"></div>
  <div ng-app="myApp" ng-controller="mainController" class="fourteen wide column">
    <div class="ui grid">
      <div class="four wide column">
        <div class="ui vertical fluid left tabular menu">
          <a class="item" *ngFor="let sub of subjectArray"
             id="{{sub.id}}"
             (click)="selectSubject = sub.id; paperTypeChanged(paperType)" [class.active]="selectSubject == sub.id">{{sub.name}}</a>
        </div>
      </div>
      <div class="twelve wide stretched column">
        <div class="ui segment box-centerside">
          <div class="ui segment">
            <div class="ui secondary pointing menu">
              <a id="pp" class="item"
                 (click)="paperTypeChanged('pp')" [class.active]="paperType == 'pp'">Pass Paper</a>
              <a id="rq" class="item" *ngIf="user.acc_type == 'S'"
                 (click)="paperTypeChanged('rq')" [class.active]="paperType == 'rq'">Random Questions</a>
              <a id="cg" class="item" *ngIf="user.acc_type == 'S'"
                 (click)="paperTypeChanged('cg')" [class.active]="paperType == 'cg'">Class Group</a>
              <a id="op" class="item" *ngIf="user.acc_type == 'G'"
                 (click)="paperTypeChanged('op')" [class.active]="paperType == 'op'">Other Paper</a>
              <a id="pr" class="item" *ngIf="user.acc_type == 'D'"
                 (click)="paperTypeChanged('pr')" [class.active]="paperType == 'pr'">Proof Reading</a>
              <a id="mp" class="item" *ngIf="user.acc_type == 'D' || user.acc_type=='T'"
                 (click)="paperTypeChanged('mp')" [class.active]="paperType == 'mp'">My Papers</a>
            </div>
          </div>
          <div *ngIf="['cg', 'rq'].indexOf(paperType) == -1">
            <app-paper-list [paperList]="paperIds"></app-paper-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `,
  styles: []
})
export class SelectPaperComponent implements OnInit, AfterViewInit {
  subjectArray = [];
  user = null;
  private paperType : String = 'pp';
  private selectSubject: String = '';

  paperIds = null;

  constructor(private paperService:PaperService) {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem("user"));
    }else{
      this.user = {acc_type : "G"};
      this.paperType = 'ap';
    }

    this.paperService.getUsersSubject().subscribe(res => {
      if (res.success) {
        this.subjectArray = res['subjects'];
        this.selectSubject = this.subjectArray[0].id;
        this.paperTypeChanged(this.paperType);
      }
    });
  }


  ngOnInit() {

  }
  ngAfterViewInit(){
    $('.ui.menu');
  }

  paperTypeChanged(type){
    this.paperService.getPaperList(this.selectSubject, type)
      .subscribe(res => {
        if(res.success){
          console.log(res);
          this.paperIds = res['ids'];
          this.paperType = type;
        }
      });
  }

}


/*
guest ->
      passpapers - finish, passpaper
      other papers - finish, not passpapers

data  -> passpapers - finish, passpaper
         proofreadings - not finished, all papers
         myPapers - all my papers(both finish and not)

student -> passpapers - finish, passpapers
           class groups - finish, not passpapers
           random questions -- #

teachers -> passpaper, finish
            myPapers , finished or not

 */

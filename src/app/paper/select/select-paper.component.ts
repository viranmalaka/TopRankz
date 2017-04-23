import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PaperService} from "../paper.service";

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
             (click)="selectSubject = sub.id" [class.active]="selectSubject == sub.id">{{sub.name}}</a>
        </div>
      </div>
      <div class="twelve wide stretched column">
        <div class="ui segment box-centerside">
          <div class="ui segment">
            <div class="ui secondary pointing menu">
              <a id="pp" class="item" *ngIf="user.acc_type == 'S' || user.acc_type == 'T'"
                 (click)="paperTypeChanged('pp')" [class.active]="paperType == 'pp'">Pass Paper</a>
              <a id="rq" class="item" *ngIf="user.acc_type == 'S' || user.acc_type == 'T'"
                 (click)="paperTypeChanged('rq')" [class.active]="paperType == 'rq'">Random Questions</a>
              <a id="cg" class="item" *ngIf="user.acc_type == 'S' || user.acc_type == 'T'"
                 (click)="paperTypeChanged('cg')" [class.active]="paperType == 'cg'">Class Group</a>
              <a id="ap" class="item" *ngIf="user.acc_type == 'D' || user.acc_type == 'G'"
                 (click)="paperTypeChanged('ap')" [class.active]="paperType == 'ap'">All Papers</a>
              <a id="pr" class="item" *ngIf="user.acc_type == 'D'"
                 (click)="paperTypeChanged('pr')" [class.active]="paperType == 'pr'">Proof Reading</a>
            </div>
          </div>


          <div *ngIf="paperType == 'pp'">
            <app-paper-list [paperList]="paperIds"></app-paper-list>
          </div>
          <!--<div *ngIf="paperType == 'cg'">-->
            <!--<h3 class="ui dividing header">Your Class Groups</h3>-->
            <!--class group list here-->
            <!--<app-card-list [paperList]="paperIds"></app-card-list>-->
          <!--</div>-->
          <!--<div *ngIf="paperType == 'rq'">-->
            <!--<app-random></app-random>-->
          <!--</div>-->
          <!--<div *ngIf="paperType == 'ap' || paperType == 'pr'">-->
            <!--<app-card-list [paperlist]="paperIds"></app-card-list>-->
          <!--</div>-->
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
        console.log(this.subjectArray);
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
    this.paperService.getPaperList(this.selectSubject, this.paperType)
      .subscribe(res => {
        if(res.success){
          this.paperIds = res['ids'];
          this.paperType = type;
          console.log(this.paperIds);
        }
      });
  }

}

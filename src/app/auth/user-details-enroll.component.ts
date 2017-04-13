import {Component, OnInit, AfterViewInit, isDevMode} from '@angular/core';
import {OtherService} from "../other.services";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-user-details-enroll',
  template: `
<div id="Enroll">
  <h1 class="ui header">Select Subject to Enroll</h1>
  <div class="ui link three cards">
    <div class="card" *ngFor="let s of subjectList">
      <div class="content">
        <div class="header">{{s.name}}</div>
        <div class="ui divider"></div>
        <div class="extra content">
          <div class="fluid ui green button"  (click)="enroll(s._id)" 
            [class.basic]="enrollList.indexOf(s._id) < 0">
            {{enrollList.indexOf(s._id) < 0 ? 'Enroll' : 'Enrolled'}}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui grid">
    <div class="six wide column"></div>
    <div class="eight wide column">
      <button class="ui button" (click)="onSubmit()">
        Submit Changes
      </button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class UserDetailsEnrollComponent implements OnInit , AfterViewInit{
  subjectList = [];
  enrollList = [];

  constructor(private otherService : OtherService, private authService : AuthService) {
    this.otherService.getAllSubjectNames().subscribe(res => {
      this.subjectList = res['subjects'];
      console.log(res);
    }, err => {
      console.log(err);
    });
    this.authService.getUserEnrollments().subscribe(res => {
      this.enrollList = res['enrollments'];
      console.log('enr' ,res);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

  enroll(id){
    if(this.enrollList.indexOf(id) > -1){
      this.enrollList.splice(this.enrollList.indexOf(id), 1);
    }else{
      this.enrollList.push(id);
    }
    console.log(this.enrollList);
  }

  onSubmit(){
    this.authService.postUserEnrollments({enroll : this.enrollList}).subscribe(res => {
      console.log(res);
      if(res.success){
        toastr['success']('save you enrollments');
      }else{
        if(isDevMode()){
          toastr['error'](res.err);
        }else{
          toastr['error']('Something when wrong..!');
        }
      }
    });
  }

  ngAfterViewInit(){

  }
}

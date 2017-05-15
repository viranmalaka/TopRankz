import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ClassGroupService} from "../paper/class-group.service";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-user-details-class-group',
  template: `
<div class="ui form">
  <div class="inline field">
    <label for="">Search Teachers Name : </label>
    <div class="ui icon input">
      <input type="text" placeholder="Search Teachers..." autocomplete="off" id="searchTxt">
      <i class="inverted circular search link icon" (click)="search()"></i>
    </div>
  </div>
</div>
<div class="ui divider"></div>
<div class="ui grid">
    <div class="ui six wide column" style="height: 65vh; overflow-y: auto;" >
      <div class="ui vertical menu" *ngIf="searchTeachersNameList.length != 0">
        <a class="item" *ngFor="let n of searchTeachersNameList; let i = index"  
            [class.active]="selectedIndex == i">
          <h4 class="ui header" (click)="selectCG(i)">{{n.visibleName}}</h4>
        </a>
      </div>
    </div>
    <div class="ui ten wide column">
      
    <div class="ui link three cards" *ngIf="searchTeachersNameList.length > 0">
      <div class="card" *ngFor="let s of searchTeachersNameList[selectedIndex].classGroup">
        <div class="content">
          <div class="header">{{s.name}}</div>
          <div class="ui divider"></div>
          <div class="extra content">
            <div class="fluid ui green button"  (click)="enroll(s._id)" 
              [class.basic]="cgList.indexOf(s._id) < 0">
              {{cgList.indexOf(s._id) < 0 ? 'Enroll' : 'Enrolled'}}
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
</div>
  `,

  styles: []
})
export class UserDetailsClassGroupComponent implements OnInit, AfterViewInit {

  searchTeachersNameList = [];
  selectedIndex = 0;
  cgList = [];

  constructor(private cgService : ClassGroupService, private authService : AuthService) { }

  ngOnInit() {
    this.cgService.getUserClassGroups().subscribe(res => {
      if(res.success){
        this.cgList = res['cg'];
      }
    })
  }

  ngAfterViewInit(){
    setTimeout(function () {
      $('.ui.checkbox').checkbox();
    }, 500);
  }

  search(){
    let txt = $('#searchTxt').val();
    this.authService.searchTeachersName(txt).subscribe(res => {
      console.log(res);
      if(res.success){
        this.searchTeachersNameList = res.teachers;
      }
    });
  }
  selectCG(index){
    this.selectedIndex = index;
    setTimeout(function () {
      $('.ui.checkbox').checkbox();
    }, 500);
  }

  enroll(id){
    this.cgService.addEnroll(id).subscribe(res => {
      if(res.success){
        toastr.success('Ok');
        this.cgList = res.newList;
      }
    })
  }

}

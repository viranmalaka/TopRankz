import { Component, OnInit } from '@angular/core';
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
          <h4 class="ui header" (click)="selectedIndex = i">{{n.visibleName}}</h4>
        </a>
      </div>
    </div>
    <div class="column">
      <!--asdf  //TODO load the classgorup name here-->
    </div>
</div>
  `,
  styles: []
})
export class UserDetailsClassGroupComponent implements OnInit {

  searchTeachersNameList = [];
  selectedIndex = 0;
  constructor(private cgService : ClassGroupService, private authService : AuthService) { }

  ngOnInit() {
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

  selectTeacher(id){
    this.cgService.getClassGroupsByTeacherID
  }
}

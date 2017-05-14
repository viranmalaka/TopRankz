import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ClassGroupService} from "../paper/class-group.service";

@Component({
  selector: 'app-create-class-group',
  template: `
<form class="ui form">
  <div class="field">
    <label>Name for the Class Group</label>
    <input type="text" name="name" id="name" placeholder="Name">
  </div>
  <button class="ui blue button" type="submit" (click)="addClassGroup()">Add</button>
</form>
<div class="ui divider"></div>
<div class="ui grid">
    <div class="ui six wide column" style="height: 65vh; overflow-y: auto;" >
    <h3>Your Class Groups</h3>
      <div class="ui vertical menu" *ngIf="classGroupNameList.length != 0">
        <a class="item" *ngFor="let n of classGroupNameList; let i = index"  
            [class.active]="selectCG == i" (click)="selectCG = i">
          <h4 class="ui header" >{{n.name}}</h4>
        </a>
      </div>
    </div>
    <div class="ui six wide column" style="height: 65vh; overflow-y: auto;">
      <h3>Your Available Papers</h3>
      <div *ngIf="teachersPaper.length > 0">
        <div class="ui checkbox" *ngFor="let x of teachersPaper">
          <input type="checkbox" tabindex="0" class="hidden">
          <label>{{x.name}}</label>
        </div>
      </div>
    </div>
    <div class="ui four wide column">
      <button class="ui button blue" (click)="print()">Save Changes</button>
    </div>
    <div class="column">
      <!--asdf  //TODO load the classgorup name here-->
    </div>
</div>

  `,
  styles: []
})
export class CreateClassGroupComponent implements OnInit, AfterViewInit {
  classGroupNameList = [];
  teachersPaper = [];
  selectCG = 0;
  constructor(private cgService : ClassGroupService) { }

  ngOnInit() {
    this.cgService.getAllClassGroup().subscribe(res => {
      if(res.success){
        this.classGroupNameList = res.cgs;

        this.cgService.getAllPapersOfTeacher().subscribe(res => {
          if(res.success){
            this.teachersPaper = res['papers'];
          }
        })
      }
    });
  }

  ngAfterViewInit(){

  }

  addClassGroup(){
    let name = $('#name').val();
    console.log(name);
    this.cgService.addCG(name).subscribe(res => {
      if(res.success){
        this.classGroupNameList.push(res.newOne);
        console.log(this.classGroupNameList);
      }
    });
  }

  print(){
    console.log(this.selectCG);
  }
}

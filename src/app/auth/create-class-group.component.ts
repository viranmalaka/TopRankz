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
      <h3 style="margin-bottom: 5px">Your Available Papers</h3>
      <h5 style="margin: 0 0 0 0">(Select which paper for the selected class Group)</h5>
      <div *ngIf="teachersPaper.length > 0">
        <div class="field">
          <div class="ui checkbox" *ngFor="let x of teachersPaper">
            <input type="checkbox" tabindex="0" class="hidden" 
            [ngModel]="cgList.length == 0 ? false : cgList[selectCG].paper.indexOf(x._id) > -1"
            (blur)="selectPaper(cgList[selectCG].paper, x._id)">
          <label>{{x.name}}</label>
        </div>
        </div>
      </div>
    </div>
    <div class="ui four wide column">
      <button class="ui button blue" (click)="savePaperAllocation()">Save Changes</button>
      <button class="ui button tiny red" (click)="deleteCG()" style="margin-top: 10px;">Delete Class Group</button>
    </div>
</div>

  `,
  styles: []
})
export class CreateClassGroupComponent implements OnInit, AfterViewInit {
  classGroupNameList = [];
  cgList = [];
  teachersPaper = [];
  selectCG = 0;
  constructor(private cgService : ClassGroupService) { }

  ngOnInit() {
    this.cgService.getAllClassGroup().subscribe(res => {
      if(res.success){
        this.classGroupNameList = res.cgs;

        for (let i = 0; i < this.classGroupNameList.length; i++) {
          let obj = this.classGroupNameList[i];
          let x = [];
          for (let j = 0; j < obj.paper.length; j++) {
            let obj1 = obj.paper[j];
            x.push(obj1._id);
          }
          this.cgList.push({paper : x, _id : obj._id});
        }
        console.log(this.cgList);
        this.cgService.getAllPapersOfTeacher().subscribe(res => {
          if(res.success){
            this.teachersPaper = res['papers'];
          }
        })
      }
    });
  }

  ngAfterViewInit(){
    setTimeout(function () {
      $('.ui.checkbox').checkbox();
    },500)
  }

  addClassGroup(){
    let name = $('#name').val();
    if(name == '') {
      toastr.error('Name should be given');
    }else{
      this.cgService.addCG(name).subscribe(res => {
        if(res.success){
          this.classGroupNameList.push(res.newOne);
          this.cgList.push({_id : res.newOne._id, paper : []});
          $('#name').val('');
        }
      });
    }
  }

  savePaperAllocation(){
    this.cgService.allocatePapers({data : this.cgList}).subscribe(res =>{
      if(res.success){
        toastr.success('Saved');
      }
    })
  }

  selectPaper(arr, id){
    let x = arr.indexOf(id);
    if(x > -1){
      arr.splice(x, 1);
    }else{
      arr.push(id);
    }
  }

  deleteCG(){
    this.cgService.dropClassGroup(this.classGroupNameList[this.selectCG]._id).subscribe(res =>{
      if(res.success){
        toastr.success('deleted');
        this.classGroupNameList.splice(this.selectCG);
        this.cgList.splice(this.selectCG);
        this.selectCG --;
      }else{
        toastr.error(res['msg']);
      }
    })
  }


}


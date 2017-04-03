import {Component, OnInit, AfterViewInit} from '@angular/core';
import {OtherService} from "../other.services";
import {AuthService} from "./auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-details-bio',
  template: `
<div id="Bio">
  <h1 class="ui header">Personal Information</h1>
  <h3 class="ui header" *ngIf="newUser"> Hay.. Welcome. Give us more details about you.</h3>
  <form class="ui form" id="personalInfoForm" [formGroup]="detailsForm" (submit)="onSubmit()">
    <div class="ui stacked segment">
      <div class="two fields">
        <div class="field">
          <label for="fName">First Name</label>
          <input type="text" id="fName" name="fName" formControlName="fName">
        </div>
        <div class="field">
          <label for="lName">Last Name :</label>
          <input type="text" id="lName" name="lName" formControlName="lName">
        </div>
      </div>
      <div class="two fields">
        <div class="field" *ngIf="user.acc_type=='T'">
          <label for="vName" >Visible Name :</label>
          <input type="text" id="vName" name="vName" formControlName="vName">
        </div>
      </div>
      <div class="field">
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" formControlName="email">
      </div>
      <div class="two fields" *ngIf="user.acc_type == 'S'">
        <div class="field">
          <label for="selDistrict">District :</label>
          <select name="district" id="selDistrict" class="ui dropdown" formControlName="district">  
            <option value="">Select District</option>
            <option  *ngFor="let d of listOfDistrict" [value]="d">{{d}}</option>
          </select>
        </div>
        <div class="field">
          <label for="school">School</label>
          <select name="school" id="selSchool" class="ui dropdown" formControlName="school">
            <option value="">Select School</option>
            <option *ngFor="let s of listOfSchools" [value]='s.id'>{{s.name}}</option>
          </select>
        </div>
      </div>  
      <div class="two fields" *ngIf="user.acc_type == 'S'">
        <div class="field">
          <label for="birthDay">Birthday :</label>
          <div class="ui calender">
            <div class="ui input left icon">
              <i class="calendar icon"></i>
              <input type="text" id="birthDay" name="birthday" formControlName="birthday">
            </div>
          </div>
        </div>
      </div>
      <div class="two fields">
        <div class="field" *ngIf="user.acc_type=='T'">
          <label for="selDistrict">Subject :</label>
          <select name="subject" id="selSubject" class="ui dropdown" formControlName="subject"
          [(ngModel)]="selectedSubject">
            <option value="">Select Subject</option>
            <option *ngFor="let s of listOfSubject" [value]='s.id'>{{s.name}}</option>
          </select>
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label for="telephone">Telephone</label>
          <input id="telephone" type="text" name="telephone" formControlName="telephone">
        </div>
        <div class="field">
          <label for="address">Address</label>
          <textarea id="address" name="address" rows="3" formControlName="address"></textarea>
        </div>
      </div>
      <div class="three fields">
        <div class="field"></div>
        <div class="field">
          <input type="submit" class="ui fluid button" value="Save" >
        </div>
      </div>
    </div>
  </form>
</div>
`,
  styles: []
})
export class UserDetailsBioComponent implements OnInit , AfterViewInit{
  user = JSON.parse(localStorage.getItem('user'));
  listOfDistrict = [];
  listOfSchools = [];
  listOfSubject = [];
  selectedSubject = [];
  extendedUser = {};

  private detailsForm = this.initForm();

  constructor(private otherService : OtherService, private authService : AuthService) {
    this.authService.getExtendedUser().subscribe(res => {
      this.extendedUser = res['eUser'];
      this.user = res['user'];
      this.detailsForm = this.initForm();
    });
  }

  initForm(){
    let formGroup = new FormGroup({
      fName : new FormControl(this.user['first_name']),
      lName : new FormControl(this.user['last_name']),
      email : new FormControl(this.user['email']),
      subject : new FormControl(),
      telephone : new FormControl(this.user['telephone']),
      address : new FormControl(this.user['address']),
      school : new FormControl(),
      district : new FormControl(),
      birthday : new FormControl(),
    });

    if(this.user.acc_type == "T" && this.extendedUser){
      formGroup.addControl('vName' ,new FormControl(this.extendedUser['visibleName']));
    }
    return formGroup;
  }

  ngOnInit() {
    console.log(this.user);
    if(this.user.acc_type == 'S'){
      this.otherService.getAllDistrict().subscribe(res => {
        this.listOfDistrict = res['districts'];
      });
      this.otherService.getAllSchools().subscribe(res => {
        this.listOfSchools = res['schools'];
      });
    }else{
      this.otherService.getAllSubjectNames().subscribe(res => {
        this.listOfSubject = res['subjects'];
      });
    }



  }


  ngAfterViewInit(){
    if(this.user.acc_type == 'S'){
      $('.ui.calender').calendar({
        type: 'date',
        startMode : 'year'
      });
      $('#selSchool').dropdown();
      $('#selDistrict').dropdown({
        onChange : function (val) {
          this.otherService.getAllSchoolsByDistrict(val).subscribe( res => {
            this.listOfSchools = res['schools'];
          })
        }.bind(this)
      }).bind(this);

      $.fn.form.settings.rules.checkDate = function (val) {
        let d = new Date();
        return (d.getFullYear() - 10) > val.split(' ')[2];
      };

      $('#personalInfoForm').form({
        fields : {
          fName : {
            identifier : 'fName',
            rules : [
              {type : 'empty', prompt :'enter the first name'}
            ]
          },
          email : {
            identifier : 'email',
            rules : [
              {type : 'empty', prompt :'enter the email'},
              {type : 'email', prompt : 'invalid email address'}
            ]
          },
          district : {
            identifier : 'district',
            rules : [
              {type : 'empty', prompt : 'enter the district'}
            ]
          },
          school : {
            identifier : 'school',
            rules : [
              {type : 'empty', prompt : 'enter the school'}
            ]
          },
          birthday: {
            identifier : 'birthday',
            rules : [
              {type : 'empty', prompt : 'enter your birthday'},
              {type : 'checkDate', prompt : 'enter a valid birthday'}
            ]
          },
          telephone : {
            identifier : 'telephone',
            rules : [
              {type :'empty', prompt : 'enter your telephone number'},
              {type : 'regExp[/[0][0-9]{9}/]' , prompt : 'enter a valid telephone number'}
            ]
          },
          address : {
            identifier : 'address',
            rules : [
              {type : 'empty', prompt : 'enter the address'},
            ]
          }
        },
        inline : true,
        on : 'blur'
      });

    }else{

      $('#selSubject').dropdown();

      $('#personalInfoForm').form({
        fields : {
          fName : {
            identifier : 'fName',
            rules : [
              {type : 'empty', prompt :'enter the first name'}
            ]
          },
          lName : {
            identifier : 'lName',
            rules : [
            ]
          },
          email : {
            identifier : 'email',
            rules : [
              {type : 'empty', prompt :'enter the email'},
              {type : 'email', prompt : 'invalid email address'}
            ]
          },
          visibleName : {
            identifier : 'vName',
            rules : [
              {type : 'empty', prompt : 'enter a name to visible you'}
            ]
          },
          telephone : {
            identifier : 'telephone',
            rules : [
              {type :'empty', prompt : 'enter your telephone number'},
              {type : 'regExp[/[0][0-9]{9}/]' , prompt : 'enter a valid telephone number'}
            ]
          },
          address : {
            identifier : 'address',
            rules : [
              {type : 'empty', prompt : 'enter the address'},
            ]
          },
          subject : {
            identifier : 'subject',
            rules : [
              {type :'empty' , prompt : 'select a subject'}
            ]
          }
        },
        inline : true,
        on : 'blur'
      });
    }

  }

  onSubmit(){
    if(this.user.acc_type == 'T'){
      this.detailsForm.value.subject = $('#selSubject').val();
    }else{
      this.detailsForm.value.school = $('#selSchool').val();
      this.detailsForm.value.birthday = new Date($('#birthDay').val());
    }
    console.log(this.detailsForm.value);
    if($('#personalInfoForm').form('is valid')){
      this.authService.postDetails(this.detailsForm.value).subscribe(res => {
        console.log(res);
      });
    }
  }
}

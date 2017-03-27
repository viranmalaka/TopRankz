import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-bio',
  template: `
<div id="Bio">
  <h1 class="ui header">Personal Information</h1>
  <h3 class="ui header"> Hay.. Welcome. Give us more details about you.></h3>
  <form action="" class="ui form" id="personalInfoForm">
    <div class="ui stacked segment">
      <div class="two fields">
        <div class="field">
          <label for="fName">First Name</label>
          <input type="text" id="fName">
        </div>
        <div class="field">
          <label for="lName">Last Name :</label>
          <input type="text" id="lName">
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label for="vName">Visible Name :</label>
          <input type="text" id="vName">
        </div>
      </div>
      <div class="field">
        <label for="email"></label>
        <input type="email" id="email">
      </div>
      <div class="two field">
        <div class="field">
          <label for="selDistrict">District :</label>
          <select name="district" id="selDistrict" class="ui dropdown">
            <option value="">Select District</option>
            <option value="01">asdfasdf</option>
            <option value="02">asdfasdf</option>
          </select>
        </div>
        <div class="field">
          <label for="school">School</label><select name="school" id="school">
          <option value="">Select School</option>
          <option value="01">askdfj</option>
          <option value="02">sadfas</option>
        </select>
        </div>
      </div>
      <div class="two field">
        <div class="field">
          <label for="birthDay">Birthday :</label>
          <div class="ui calender">
            <div class="ui input left icon">
              <i class="calender icon"></i>
              <input type="text" id="birthDay">
            </div>
          </div>
        </div>
      </div>
      <div class="two field">
        <div class="field">
          <label for="selDistrict">Subject :</label>
          <select name="subject" id="selSubject" class="ui dropdown">
            <option value="">Select Subject</option>
            <option value="01">asdfasdf</option>
            <option value="02">asdfasdf</option>
          </select>
        </div>
      </div>
      <div class="two field">
        <div class="field">
          <label for="address">Address</label>
          <input id="address" type="text">
        </div>
        <div class="field">
          <label for="telephone">Telephone</label>
          <input id="telephone" type="text">
        </div>
      </div>
      <div class="three field">
        <div class="field"></div>
        <div class="field">
          <input type="submit" class="ui fluid button">
        </div>
      </div>
    </div>
  
  </form>
</div>

`,
  styles: []
})
export class UserDetailsBioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-user-profile',
  template: `
<div class="ui container">
  <h2>{{extendedUser == undefined ? 'N/A' : extendedUser.first_name}} 
  {{extendedUser == undefined ? 'N/A' : extendedUser.last_name}}</h2>
  <h3>{{user.username}}</h3>
  <p>{{user.email}}</p>
</div>

`,
  styleUrls: []
})
export class UserProfileComponent implements OnInit {
  user;
  extendedUser;

  constructor(private authService : AuthService) {


  }

  ngOnInit() {
    this.authService.getExtendedUser().subscribe(res => {
      console.log('asdf');
      this.user = JSON.parse(localStorage.getItem('user'));
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-enroll',
  template: `
<div id="Enroll">
  <h1 class="ui header">Select Subject to Enroll</h1>
  <div class="ui link three cards">
    <div class="card">
      <div class="content">
        <div class="header">Name
          <button class="ui toggle button">
            Enroll
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="ui grid">
    <div class="six wide column"></div>
    <div class="eight wide column">
      <button class="ui button">
        Submit Changes
      </button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class UserDetailsEnrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-group',
  template: `<div class="ui grid">
  <div class="eight wide column">
    <div class="ui raised link card" >
      <div class="content">
        <div class="header">{{ "name" }}</div>
        <div class="meta"><span class="category">you have done this {{'times'}}</span></div>
        <div class="description">
          p {{"questions"}} - questions : {{"asdf"}} - minites
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
          <button class="ui tiny button disabled">show results</button>
        </div>
        <div class="left floated author">
          <button class="ui tiny button">take attempt</button>
        </div>
      </div>
    </div>
  </div>
</div>

`,
  styles: []
})
export class ClassGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

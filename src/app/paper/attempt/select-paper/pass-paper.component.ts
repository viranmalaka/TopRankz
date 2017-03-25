import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-paper',
  template: `<div class="ui grid">
  <div class="eight wide column">
    <div class="ui raised link card">
      <div class="content">
        <div class="header">2014 Sinhala</div>
        <div class="meta">
          <span class="category">
            you have never done this before
          </span>
        </div>
        <div class="description">
          p 60 - questions : 120 - minites
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
  <div class="eight wide column">
    <div class="ui raised link card">
      <div class="content">
        <div class="header">2015 physics</div>
        <div class="meta"><span class="category">you have done this 3 times</span></div>
        <div class="description">p 60 - questions : 120 - minites</div>
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
export class PassPaperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

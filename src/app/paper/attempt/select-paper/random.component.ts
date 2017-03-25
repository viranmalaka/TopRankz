import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  template: `<form class="ui form sixteen wide column">
  <h4 class="ui dividing header">Filters</h4>
  <div class="fields">
    <div class="field sixteen column wide">
      <label>Subject</label>
      <select name="subject" id="" class="ui fluid dropdown">
        <option value="">Subject</option>
        <option value="01">Sinhala</option>
        <option value="02">Physics</option>
      </select>
    </div>
    <div class="field sixteen column wide">
      <label>Medium</label>
      <select name="subject" id="" class="ui fluid dropdown">
        <option value="">Subject</option>
        <option value="01">Sinhala</option>
        <option value="02">Physics</option>
      </select>
    </div>
  </div>
  <div class="three wide">
    <div class="inline field">
      <label for="">Number of Questions :</label>
      <input type="text" name='nAnswers' maxlength='2' placeholder='# Questions'>
    </div>
  </div>
  <br>
  <button class="ui button">Search</button>
  <div class="ui active inline loader"></div>
</form>
<h4 class="ui dividing header">Search Results</h4>
<div class="ui grid">
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
export class RandomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit, AfterViewInit} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-random',
  template: `
<form class="ui form sixteen wide column">
  <h4 class="ui dividing header">Filters</h4>
  <div class="fields">
    <div class="field sixteen column wide">
      <label>Topics</label>
      <select name="subject" id="" class="ui fluid dropdown">
        <option value="">Topic</option>
        <option value="01">Topic 1</option>
        <option value="02">Topic 2</option>
      </select>
    </div>
    <div class="field sixteen column wide">
      <label>Medium</label>
      <select name="subject" id="" class="ui fluid dropdown">
        <option value="">Subject</option>
        <option value="01">Sinhala</option>
        <option value="02">English</option>
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
<br>
<app-card-list></app-card-list>
`,
  styles: []
})
export class RandomComponent implements OnInit, AfterViewInit{
  viewPage = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.dropdown').dropdown();
  }

}

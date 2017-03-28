import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-container',
  template: `
<div class="ui segment" style="margin-top: 35px">
  <app-one-question></app-one-question>
  <div class="ui divider"></div>
  <div class="ui grid">
    <div class="six wide column">
      <div class="ui buttons">
        <button class="ui button"><i class="left arrow icon"></i></button>
        <!--.or-->
        <button class="ui positive button"><i class="right arrow icon"></i></button>
      </div>
    </div>
    <div class="six wide column">
      <button class="ui right labeled icon green button"><i class="right arrow icon"></i>
        <div class="visible content">Submit</div>
      </button>
    </div>
    <div class="two wide column right floated">
      <div class="ui icon buttons">
        <button class="ui toggle button"><i class="flag icon"></i></button>
      </div>
    </div>
  </div>
  <div id="quePrg" style="margin-bottom:-10px" data-value="10"
       data-total="20" class="ui green bottom attached progress">
    <div class="bar"></div>
  </div>
</div>
  `,
  styles: []
})
export class QuestionContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

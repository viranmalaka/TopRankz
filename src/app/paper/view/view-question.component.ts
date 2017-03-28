import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-question',
  template: `
<div class="fourteen wide column" >
    <div class="ui segment">
      <div style="font-size:15px" class="ui top attached label">
        <div class="ui grid">
          <div class="one wide column">01</div>
        </div>
      </div>
        <div class="ui segment" style="margin-top: 35px">
          <app-view-question-content></app-view-question-content>
          <div class="ui divider"></div>
          <div class="ui grid">
            <div class="six wide column">
              <div class="ui buttons">
                <button class="ui button"><i class="left arrow icon"></i></button>
                <!--.or-->
                <button class="ui positive button"><i class="right arrow icon"></i></button>
              </div>
            </div>
          </div>
        </div>
      <pre></pre>
      <div class="ui bottom attached label">
        <div style="float:left">Tag list here</div>
        <div style="float:right">Hardness Level</div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class ViewQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

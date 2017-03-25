import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-question',
  template: `
Question
<div class="ui divider"></div>
<div class="ui grid">
  <div class="one wide column"></div>
  <div class="fifteen wide column">
    <div class="ui grid">
      <div class="row">
        <div class="one wide column">
          <div class="ui radio checkbox">
            <input type="radio" name="fruit" checked="checked"
                   ng-model="formData.ans1" class="hidden"/>
            <label>01</label>
          </div>
        </div>
        <div class="fifteen wide column">answer</div>
      </div>
    </div>
  </div>
</div>
`,
  styles: []
})
export class OneQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-paper',
  template: `
<div class="ui segment">
  <h1 class="textCenter">
    Paper Name
  </h1>
  <div class="ui grid">
    <div class="row">
      <div class="eight wide column">
        <p class="textRight fontSize">Number of questions :</p>
      </div>
      <div class="eight wide column">
        <p class="textLeft fontSize">#</p>
      </div>
    </div>
    <div class="row">
      <div class="eight wide column">
        <p class="textRight fontSize">Time for whole paper(minutes):</p>
      </div>
      <div class="eight wide column">
        <p class="textLeft fontSize">233</p>
      </div>
    </div>
    <div class="row">
      <div class="eight wide column">
        <p class="textRight fontSize">You have done this paper before :</p>
      </div>
      <div class="eight wide column">
        <p class="textLeft fontSize">times</p>
      </div>
    </div>
       <div class="row">
        <div class="eight wide column">
          <p class="textRight fontSize">Average marks :</p>
        </div>
        <div class="eight wide column">
          <p class="textLeft fontSize">#</p>
        </div>
      </div>
      <div class="row">
        <div class="sixteen wide column textCenter">
          <button class="ui blue button">Take Attempt</button>
        </div>
      </div>
  </div>
</div>

`,
  styles: ['.textLeft{  text-align:left  }',
            '.textRight { text-align:right }',
            '.textCenter { text-align:center }',
            '.fontSize { font-size: 20px}']
})
export class StartPaperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

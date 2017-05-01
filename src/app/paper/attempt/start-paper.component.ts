import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-start-paper',
  template: `
<div class="ui segment">
  <h1 class="textCenter">
    {{paper.name}}
  </h1>
  <div class="ui grid">
    <div class="row">
      <div class="eight wide column">
        <p class="textRight fontSize">Number of questions :</p>
      </div>
      <div class="eight wide column">
        <p class="textLeft fontSize">{{paper.questions}}</p>
      </div>
    </div>
    <div class="row">
      <div class="eight wide column">
        <p class="textRight fontSize">Time for whole paper(minutes):</p>
      </div>
      <div class="eight wide column">
        <p class="textLeft fontSize">{{paper.time_limit}}</p>
      </div>
    </div>
    <div class="row">
      <div class="eight wide column">
        <p class="textRight fontSize">You have done this paper before :</p>
      </div>
      <div class="eight wide column">
        <p class="textLeft fontSize">{{paper.before}}</p>
      </div>
    </div>
       <div class="row">
        <div class="eight wide column">
          <p class="textRight fontSize">Average marks :</p>
        </div>
        <div class="eight wide column">
          <p class="textLeft fontSize">{{paper.avg}}</p>
        </div>
      </div>
      <div class="row">
        <div class="sixteen wide column textCenter">
          <button class="ui blue button" (click)="onTakeAttempt()">Take Attempt</button>
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
  @Input() paper;
  @Output() takeAttempt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTakeAttempt(){
    this.takeAttempt.emit();
  }
}

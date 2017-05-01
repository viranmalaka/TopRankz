import {Component, OnInit, Input, OnChanges, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-questions-dash',
  template: `
<div class="fourteen wide column" >
    <div class="ui segment">
      <div style="font-size:15px" class="ui top attached label">
        <div class="ui grid">
          <div class="one wide column">{{('0' + question[selectedQue - 1].questionNumber).slice(-2)}}</div>
          <div class="nine wide column"></div>
          <div class="three wide right floated column" (click)="remainTime = !remainTime">
            {{('0' + min).slice(-2)}} : {{('0' + sec).slice(-2)}}
          </div>
          <div style="height:10px" class="three wide right floated column">
            <div id="timePrg" class="ui indicating small progress" >
              <div class="bar"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="autumn">
        <app-question-container 
        [question]="question[selectedQue - 1]" 
        (navQue)="onNavQue($event)"
        [viewPrecent]="viewCount * 100 / question.length"></app-question-container>
      </div>
      
      <pre></pre>
      
      <div class="ui bottom attached label">
        <div style="float:left"></div>
        <div style="float:right">you have done this 3 times before</div>
      </div>
    </div>
  </div>
  <br>
  <button class="ui button">Answer Sheet</button>
  <button class="ui button">Finish Attempt</button>
  `,
  styles: []
})
export class QuestionsDashComponent implements OnInit, OnChanges , AfterViewInit{

  @Input() question;
  @Input() time;
  @Input() totalTime;
  @Input() selectedQue;
  @Input() viewCount;

  @Output() changeQ = new EventEmitter();

  min = 0; sec = 0;
  remainTime = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.ui.radio').checkbox();
    $('#timePrg').progress({precent:0});
  }

  back(){
    $('.autumn')
      .transition('fade left','200ms')
      .transition('fade right', '200ms')
    ;
    if(this.selectedQue == 1){
      // this.selectedQue = this.question.length;
      this.changeQ.emit(this.question.length);
    } else{
      this.changeQ.emit(this.selectedQue - 1);
      // this.selectedQue --;
    }
  }

  next(){
    $('.autumn')
      .transition('fade right')
      .transition('fade left')
    ;
    if(this.selectedQue == this.question.length){
      // this.selectedQue = 1;
      this.changeQ.emit(1);
    }else{
      this.changeQ.emit(this.selectedQue + 1);
    }
  }


  ngOnChanges(){
    if (this.remainTime) {
      this.time = this.totalTime * 60 - this.time;
    }
    this.min = Math.floor(this.time / 60);
    this.sec = this.time % 60;
    $('#timePrg').progress('set progress', this.time*100/(this.totalTime*60));
  }


  onNavQue(x){
    if(x) this.next();
    if(!x) this.back();
  }
}

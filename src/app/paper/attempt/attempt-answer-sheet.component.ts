import {Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-attempt-answer-sheet',
  template: `
<div class="ui equil width grid">
  <div class="eight wide column right aligned">
    <table class="ui celled table">
      <tbody>
      <tr *ngFor="let q of arrayOfQuestion1">
        <td>{{('0' + q).slice(-2)}}</td>
        <td *ngFor="let n of arrayOfAnswer">
          <div class="ui radio checkbox" (click)="setLastEdit(q-1)" 
              [class.disabled]="questionArray[q-1].viewAt==null">
              <input type="radio" class="hidden" name="ans{{q}}" [value]="n" 
              [(ngModel)]="questionArray[q-1].givenAnswer">
              <label>{{n}}</label>
            </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="eight wide column left aligned">
    <table class="ui celled table">
      <tbody>
      <tr *ngFor="let q of arrayOfQuestion2">
        <td>{{('0' + q).slice(-2)}}</td>
        <td *ngFor="let n of arrayOfAnswer">
          <div class="ui radio checkbox" (click)="setLastEdit(q-1)"
                [class.disabled]="questionArray[q-1].viewAt==null">
              <input type="radio" class="hidden" name="ans{{q}}" [value]="n" 
              [(ngModel)]="questionArray[q - 1].givenAnswer">
              <label>{{n}}</label>
            </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
  `,
  styles: []
})

export class AttemptAnswerSheetComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() questionArray;
  arrayOfQuestion1 = [];
  arrayOfQuestion2 = [];
  arrayOfAnswer = [];
  numberOfQuestions = 32;
  numberOfAnswers = 5;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.numberOfQuestions = this.questionArray.length;
    this.numberOfAnswers = this.questionArray[0].answers.length;

    this.arrayOfQuestion1 = Array(Math.floor(this.numberOfQuestions/2)).fill(0).map((x,i) => i +1);
    this.arrayOfQuestion2 = Array(this.numberOfQuestions - Math.floor(this.numberOfQuestions/2))
      .fill(0).map((x,i) => Math.floor(this.numberOfQuestions/2) + 1 + i);

    this.arrayOfAnswer = Array(this.numberOfAnswers).fill(0).map((x,i) => i + 1);

  }

  ngAfterViewInit(){
    $('.ui.radio').checkbox();
  }

  setLastEdit(n){
    if(this.questionArray[n].viewAt != null){
      this.questionArray[n].lastEdit = (new Date()).getTime() - this.questionArray[n].viewAt.getTime();
    }
  };
}

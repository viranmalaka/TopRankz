import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {PaperService} from "../paper.service";
declare let $: any;
@Component({
  selector: 'app-submit-paper',
  template: `
<div class="container">
  <div class="padded ui grid">
    <div class="sixteen wide column">
      <h2 class="center">Added Questions</h2>
      <div class="ui indicating progress active" id="quePrg">
        <div class="bar" style="transition-duration: 300ms; width: 50%;"></div>
        <div class="label">Adding 12 of 20 photos</div>
      </div>
    </div>
    <div class="sixteen wide column centered">
      <h2 class="center">Added Answers</h2>
      <div class="ui indicating progress active" id="ansPrg">
        <div class="bar" style="transition-duration: 300ms; width: 60%;"></div>
        <div class="label">Adding 12 of 20 photos</div>
      </div>
    </div>
    <div class="row centered">
      <div class="five wide column">
        <button class="ui button" (click)="onProofReadingSubmit()">Submit for proof reading</button>
      </div>
      <div class="five wide column">
        <button class="ui button" (click)="onFinalSubmit()">Submit as final</button>
      </div>
    </div>
  </div>
</div>

`,
  styles: []
})
export class SubmitPaperComponent implements OnInit, AfterViewInit {
  @Input() paper;
  @Input() questionArray;

  constructor(private paperService : PaperService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('#quePrg')
      .progress({
        text: {
          active: 'Adding {value} of {total} Questions',
          success: '{total} Questions added!'
        }
      });
    $('#ansPrg')
      .progress({
        text: {
          active: 'Adding {value} answers for {total} Questions',
          success: 'All answers added'
        }
      });
  }

  onFinalSubmit(){
    this.paperService.submitFinalPaper(this.paper, this.questionArray)
      .subscribe(res => {

      });
  }

  onProofReadingSubmit(){
    this.paperService.submitToProofReading(this.paper, this.questionArray)
      .subscribe(res => {

      });
  }

}

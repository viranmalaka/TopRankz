import {Component, OnInit, AfterViewInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {PaperService} from "../paper.service";


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
        <button class="ui button" (click)="submitFullPaperPR()">Submit for proof reading</button>
      </div>
      <div class="five wide column">
        <button class="ui button" (click)="submitFullPaperFinal()">Submit as final</button>
      </div>
    </div>
  </div>
</div>

`,
  styles: []
})
export class SubmitPaperComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() paper;
  @Input() questionArray;
  @Output() navQuestions = new EventEmitter<Number>();

  constructor(private paperService : PaperService) { }

  ngOnInit() {

  }

  ngOnChanges(){
    this.ngAfterViewInit();
    // $('#quePrg').progress('set value', 10);
  }


  ngAfterViewInit(){
    $('#quePrg')
      .progress({
        total : 50,
        text: {
          active: 'Added {value} of {total} Questions',
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

  submitFullPaperFinal(){
    this.paperService.submitFinalPaper(this.paper, this.questionArray).subscribe(res => {
      if(res.success){
        //navigate paper view
        toastr.success('saved paper');
      }else{
        toastr.error('error - ' + res.msg);
        this.navQuestions.emit(res.errIndex);
      }
    });
  }

  submitFullPaperPR(){
    this.paperService.submitToProofReading(this.paper, this.questionArray).subscribe(res => {
      if(res.success){
        //navigate to paper view
      }
    });
  }
}

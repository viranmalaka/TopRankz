import {Component, OnInit, AfterViewInit} from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-submit-paper',
  templateUrl: './submit-paper.component.html',
  styles: []
})
export class SubmitPaperComponent implements OnInit, AfterViewInit {

  constructor() { }

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

}

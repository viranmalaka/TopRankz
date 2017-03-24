import {Component, OnInit, AfterViewInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-create-paper',
  templateUrl: './create-paper.component.html',
  styles: []
})
export class CreatePaperComponent implements OnInit, AfterViewInit {
  private numberOfQuestions = 50;
  private arrayQuestions = Array(this.numberOfQuestions).fill(0).map((x,i) => i+1);
  ngOnInit() {

  }

  ngAfterViewInit(){
    console.log(this.arrayQuestions);
  }
}

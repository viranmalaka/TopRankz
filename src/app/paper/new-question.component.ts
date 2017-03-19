import {Component, OnInit, AfterViewInit} from '@angular/core';
declare let $: any;
declare let Quill : any;

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls : []
})
export class NewQuestionComponent implements OnInit , AfterViewInit{
  numberOfQuestions = 5;
  questionArray = Array(this.numberOfQuestions).fill(0).map((x,i) => i+1);
  quillAnsTextboxes = [];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.ui.checkbox').checkbox();

// $('select.dropdown').dropdown();
    $('.ui.dropdown').dropdown({
      allowAdditions: true
    });



    let options = {
      theme:'snow'
    };
    let quill = new Quill('#qBody', options);

    for(let i = 0; i < this.numberOfQuestions; i++) {
      this.quillAnsTextboxes.push(new Quill('#ans' + (i+1), {
        bounds: '.ans',
        theme: 'bubble'
      }));
    }
  }

}

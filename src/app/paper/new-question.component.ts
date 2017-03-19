import {Component, OnInit, AfterViewInit} from '@angular/core';
import '../../../node_modules/quill/dist/quill.js'
import '../../../node_modules/quill/dist/quill.core.js'

declare let $: any;
declare let Quill: any;

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['../../../node_modules/quill/dist/quill.core.css',
    "../../../node_modules/quill/dist/quill.snow.css"]
})
export class NewQuestionComponent implements OnInit , AfterViewInit{

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.ui.checkbox').checkbox();

    let options = {
      debug: 'info',
      modules: {
        toolbar: '#toolbar'
      },
      placeholder: 'Compose an epic...',
      readOnly: true,
      theme: 'snow'
    };
    let quill = new Quill('#editor', options);
  }

}

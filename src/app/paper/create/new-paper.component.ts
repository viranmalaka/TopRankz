import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PaperService} from "../paper.service";
import {FormControl, FormGroup} from "@angular/forms";
declare let $: any;

@Component({
  selector: 'app-new-paper',
  templateUrl: 'new-paper.component.html',
  styles: []
})
export class NewPaperComponent implements OnInit, AfterViewInit {
  private allPaperName = [];


  constructor(private paperServices:PaperService) {  }

  ngOnInit() {
    this.paperServices.getAllPaperNames()
    .subscribe(resPaperNames => {
      this.allPaperName = resPaperNames['get_all_paper_names'];
    });
  }

  ngAfterViewInit(){
    // new validation rule for check paper name is available
    $.fn.form.settings.rules.checkName = function (value) {
      return $.inArray(value, this.allPaperNames) < 0;
    };
    $.fn.form.settings.rules.range = function (value) {
      return value > 0.2 && value < 3;
    };

    $('#newPaper').form({
      fields: {
        name: {
          identifier: 'name', rules: [{
            type: 'empty',
            prompt: 'Please enter a name to the paper'
          }, {
            type: 'checkName',
            prompt: 'The name is already used. Try another one'
          }], value: "test"
        },
        subject: {
          identifier: 'subject', rules: [{
            type: 'empty',
            prompt: 'Please select a subject'
          }]
        },
        medium: {
          identifier: 'medium', rules: [{
            type: 'empty',
            prompt: 'Please select a medium(language)'
          }]
        },
        nQuestions: {
          identifier: 'nQuestions', rules: [{
            type: 'empty',
            prompt: 'Please enter number of questions in the paper'
          }, {
            type: 'integer[5..100]',
            prompt: 'only 5 to 100 number of questions for each paper'
          }]
        },
        nAnswers: {
          identifier: 'nAnswers', rules: [{
            type: 'empty',
            prompt: 'Please enter how many number of answers for each question'
          }, {
            type: 'integer[2..6]',
            prompt: 'invalid number of answer input'
          }]
        },
        totalTime: {
          identifier: 'totalTime', rules: [{
            type: 'empty',
            prompt: 'Please enter time for the paper(minutes)'
          }, {
            type: 'integer[10..400]',
            prompt: 'invalid input'
          }]
        },
        unitMark: {
          identifier: 'unitMark', rules: [{
            type: 'empty',
            prompt: 'please enter mark for a question'
          }, {
            type: 'number',
            prompt: 'please enter a valid number'
          }, {
            type: 'range',
            prompt: 'invalid range'
          }]
        }
      },
      inline: true,
      on: 'blur'
    });
  }

}

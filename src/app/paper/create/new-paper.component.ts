import {Component, OnInit, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {PaperService} from "../paper.service";
import {FormControl, FormGroup} from "@angular/forms";
import {OtherService} from "../../other.services";
import {Router, ActivatedRoute} from "@angular/router";
declare let $: any;

@Component({
  selector: 'app-new-paper',
  templateUrl: 'new-paper.component.html',
  styles: []
})
export class NewPaperComponent implements OnInit, AfterViewInit {
  private allSubject =[];
  @Output() onSubmitForm = new EventEmitter<FormGroup>();

  paperCreateForm = new FormGroup({
    name : new FormControl(),
    subject : new FormControl(),
    medium : new FormControl(),
    nQuestions : new FormControl(),
    nAnswers : new FormControl(),
    timeLimit : new FormControl(),
    unitMark : new FormControl(),
    random : new FormControl()
  });

  constructor(private paperServices:PaperService, private otherServices : OtherService,
              private router : Router, private route : ActivatedRoute) {  }

  ngOnInit() {
    this.otherServices.getAllSubjectNames().subscribe(res => {
      this.allSubject = res.subjects;
    });
  }

  ngAfterViewInit(){
    // new validation rule for check paper name is available
    $.fn.form.settings.rules.range = function (value) {
      return value > 0.2 && value < 3;
    };

    $.fn.form.settings.rules.checkName = function (value) {
      let x = $.ajax({
        url : require('../../config')['development'].domainURL + 'paper/check_paper_name',
        method : 'GET',
        data : {name : value},
        async : false,
        success : function (data) {
          console.log(data);
          return data.responseJSON;
        }
      }).responseJSON;
      if(x){
        return !x.exist;
      }else{
        return false;
      }
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
      inline: true
    });

    $('.ui.dropdown').dropdown();
    $('#random').checkbox();
  }

  onSubmit(){
    if($('#newPaper').form('is valid')){
      this.paperCreateForm.value.medium = $('#mediumSelect').val();
      this.paperCreateForm.value.subject = $('#subjectSelect').val();
      this.paperCreateForm.value.random = $('#random').checkbox('is checked');
      this.onSubmitForm.emit(this.paperCreateForm);
    }
  }
}

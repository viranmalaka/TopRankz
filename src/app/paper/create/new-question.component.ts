import {Component, OnInit, AfterViewInit, Input, OnChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-question',
  templateUrl: 'new-question.component.html',
  styleUrls : []
})
export class NewQuestionComponent implements OnInit , AfterViewInit, OnChanges{
  @Input() question;
  mceAns = [];
  mceQBody = null;
  ansArray = [];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.ansArray = Array(this.question.answers.length).fill(0).map((x, i) => i);
    console.log(this.ansArray);
  }

  ngOnChanges(){
    if(this.mceQBody){
      this.setMCEEditors();
    }
  }

  ngAfterViewInit(){
    $('.ui.checkbox').checkbox();

    $('.ui.dropdown').dropdown({
      allowAdditions:  true
    });

    tinyMCE.init({
      selector : '#qBody',
      skin_url: '/assets/skins/lightgray',
      statusbar : false,
      menubar : false,
      init_instance_callback: function (editor) {
        editor.on('blur', function (e) {
          this.question.body = tinyMCE.activeEditor.getContent();
        }.bind(this))
      }.bind(this),
      setup : function (e) {
        this.mceQBody = e;
      }.bind(this)
    });

    for(let i = 0; i < this.question.answers.length ; i ++){
      tinyMCE.init({
        selector : '#ans' + (i+1),
        skin_url : '/assets/skins/lightgray',
        inline : true,
        menubar : false,
        init_instance_callback: function (editor) {
          editor.on('blur', function (e) {

            this.question.answers[i].body = tinyMCE.activeEditor.getContent();
          }.bind(this))
        }.bind(this),
        setup : function (e) {
          this.mceAns.push(e);
        }.bind(this)
      })
    }
    this.setMCEEditors();
  }

  onSubmit(){

  }

  checkedThisAns(val){
    return this.question.correct.indexOf(val) > -1;
  }

  toggleThisAns(val){
    if(this.question.correct.indexOf(val) > -1) {
      this.question.correct.splice(this.question.correct.indexOf(val), 1);
    }else{
      this.question.correct.push(val);
    }
  }

  setMCEEditors(){
    this.mceQBody.setContent(this.question.body);
    for (let i = 0; i < this.mceAns.length; i++) {
      this.mceAns[i].setContent(this.question.answers[i].body);
    }
  }
}



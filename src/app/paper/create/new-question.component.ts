import {Component, OnInit, AfterViewInit, Input, OnChanges, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OtherService} from "../../other.services";
import {PaperService} from "../paper.service";

@Component({
  selector: 'app-new-question',
  templateUrl: 'new-question.component.html',
  styleUrls : []
})
export class NewQuestionComponent implements OnInit , AfterViewInit, OnChanges{
  @Input() question;
  @Input() subject;
  mceAns = [];
  mceQBody = null;
  ansArray = [];
  private topicsArray = [];
  private tagsArray = [];

  constructor(private route : ActivatedRoute, private otherService: OtherService,
  private paperService : PaperService) { }

  ngOnInit() {
    this.ansArray = Array(this.question.answers.length).fill(0).map((x, i) => i);
    this.otherService.getAllTopics(this.subject).subscribe(res => {
      if(res.success){
        this.topicsArray = res['topics'];
        console.log(this.topicsArray);
      }
    });
    this.paperService.getAllTags().subscribe(res => {
      if(res.success){
        this.tagsArray = res['tags'];
      }
    });
  }

  ngOnChanges(){
    if(this.mceQBody){
      this.setMCEEditors();
      this.setDropDowns();
    }
  }


  ngAfterViewInit(){
    console.log('on view init');
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
    this.setDropDowns();
  }


  onSubmit(){
    console.log(this.question);
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

  setDropDowns(){
    let dropdowns = $('.ui.dropdown');

    if (this.question.tags.length > 0) {
      dropdowns.has('#tags').dropdown('set selected', this.question.tags);
    }else{
      dropdowns.has('#tags').dropdown('clear');
    }
    if (this.question.topics.length > 0) {
      dropdowns.has('#topics').dropdown('set selected', this.question.topics);
    }else{
      dropdowns.has('#topics').dropdown('clear');
    }
  }

  onTopicsChanged(){
    this.question.topics = $('.ui.dropdown').has('#topics').dropdown('get value');
  }

  onTagsChanged(){
    this.question.tags = $('.ui.dropdown').has('#tags').dropdown('get value').split(',');
  }
}



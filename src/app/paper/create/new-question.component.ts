import {Component, OnInit, AfterViewInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
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
  @Output() onSubmitChanges = new EventEmitter();
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
    let that = this;
    // console.log('on view init');
    $('.ui.checkbox').checkbox();

    $('#topics').dropdown({
      onChange: function(val){
        that.question.topics = val;
      }
    });
    $('#tags').dropdown({
      allowAdditions:  true,
      onChange : function(val){
        that.question.tags = val.split(',');
      }
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

    setTimeout(()=>{
      this.setMCEEditors();
      this.setDropDowns();
    }, 100)


  }

  onSubmit(){
    this.onSubmitChanges.emit();
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
    if (this.question.tags.length > 0 && this.question.tags[0] != "") {
      $('#tags').dropdown('set exactly', this.question.tags);
    }else{
      $('#tags').dropdown('clear');
    }
    if (this.question.topics.length > 0) {
      $('#topics').dropdown('set exactly', this.question.topics);
    }else{
      $('#topics').dropdown('clear');
    }
  }
}



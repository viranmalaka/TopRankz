import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-question',
  templateUrl: 'new-question.component.html',
  styleUrls : []
})
export class NewQuestionComponent implements OnInit , AfterViewInit{
  @Input() question;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {

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
      menubar : false
    });

    for(let i = 1; i <= this.question.answers.length ; i ++){
      tinyMCE.init({
        selector : '#ans' + i,
        skin_url : '/assets/skins/lightgray',
        inline : true,
        menubar : false
      })
    }
  }
}

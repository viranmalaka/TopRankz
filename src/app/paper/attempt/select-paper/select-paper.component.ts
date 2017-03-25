import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PaperService} from "../../paper.service";
declare let $:any;

@Component({
  selector: 'app-select-paper',
  templateUrl: './select-paper.component.html',
  styles: []
})
export class SelectPaperComponent implements OnInit, AfterViewInit{
  arraySubjects;
  private activeContent = 'pp';
  constructor(private paperService:PaperService) { }

  ngOnInit() {
    this.arraySubjects = this.paperService.getUsersSubject().subjects;
  }

  ngAfterViewInit(){
    $('#' + this.arraySubjects[0].id).addClass('active');
    $('#pp').addClass('active');
    $('.ui.menu')
      .on('click', '.item', function () {
        if (!$(this).hasClass('dropdown')) {
          $(this)
            .addClass('active')
            .siblings('.item')
            .removeClass('active');
          var con = $('#container');
          switch ($(this).attr('id')){
            case 'pp':
              // con.html(passpaperPartial);
              break;
            case 'cg':
              // con.html(clsgroupPartials);
              break;
            case 'rq':
              // con.html(randomPartials);
              $('select.dropdown').dropdown();
              break;
          }
        }
      });
  }

  setActiveContent(name){
    this.activeContent = name;
    console.log(name);
  }
}

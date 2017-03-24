import {Component, OnInit, AfterViewInit} from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-select-paper',
  templateUrl: './select-paper.component.html',
  styles: []
})
export class SelectPaperComponent implements OnInit, AfterViewInit{
  arraySubjects = ['Physics', 'Chemistry', 'Bio'];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
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
}

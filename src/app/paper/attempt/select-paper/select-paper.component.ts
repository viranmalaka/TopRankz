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
  private paperType : String = 'pp';
  private selectSubject: String = '';

  constructor(private paperService:PaperService) { }

  ngOnInit() {
    this.arraySubjects = this.paperService.getUsersSubject().subjects;
    this.selectSubject = this.arraySubjects[0].id;
  }

  ngAfterViewInit(){
    $('.ui.menu');
  }
}

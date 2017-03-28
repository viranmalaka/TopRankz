import {Component, OnInit, AfterViewInit} from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-card-list',
  template: `
<div class="ui grid">
  <div [class.five]="viewPage" [class.eight]="!viewPage" class="rndClass">
    <app-paper-card></app-paper-card>
  </div>
  <div [class.five]="viewPage" [class.eight]="!viewPage" class="rndClass">
    <app-paper-card></app-paper-card>
  </div>
  <div [class.five]="viewPage" [class.eight]="!viewPage" class="rndClass">
    <app-paper-card></app-paper-card>
  </div>
  <div [class.five]="viewPage" [class.eight]="!viewPage" class="rndClass">
    <app-paper-card></app-paper-card>
  </div>
</div>
  `,
  styles: []
})
export class CardListComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.rndClass').each(function (obj) {
      $(this).addClass("wide");
      $(this).addClass("column");
    })
  }
}

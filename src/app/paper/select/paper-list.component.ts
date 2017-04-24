import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-paper-list',
  template: `
<div class="ui grid">
    <app-paper-card *ngFor="let p of paperList" [paper]="p"></app-paper-card>
</div>
  `,
  styles: []
})
export class PaperListComponent implements OnInit, OnChanges {

  @Input() paperList;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $('.rndClass').each(function (obj) {
      $(this).addClass("wide");
      $(this).addClass("column");
    })
  }

  ngOnChanges(){
    }

}

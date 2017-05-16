import { Component, OnInit } from '@angular/core';
import {PaperService} from "./paper.service";

@Component({
  selector: 'app-newly-added-papers',
  template: `
    <div class="ui container">
    <div class="ui grid">
      <div class="ui two wide column">
        sdasd
      </div>
      <div class="ui fourteen wide column">
      
    <app-paper-list [paperList]="papers"></app-paper-list>
      </div>
    </div>
    </div>
  `,
  styles: []
})
export class NewlyAddedPapersComponent implements OnInit {
  papers = [];
  constructor(private paperService : PaperService) { }

  ngOnInit() {
    this.paperService.getNewlyAddedPapers().subscribe(res => {
      this.papers = res.papers;
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {PaperService} from "./paper/paper.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PaperService]
})
export class AppComponent implements OnInit{
  constructor(private PaperService : PaperService){}

  ngOnInit(){

  }
}

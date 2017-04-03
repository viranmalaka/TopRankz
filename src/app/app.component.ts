import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PaperService} from "./paper/paper.service";
import {AuthService} from "./auth/auth.service";
import {OtherService} from "./other.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PaperService, AuthService, OtherService]
})
export class AppComponent implements OnInit, AfterViewInit{
  constructor(){}

  ngOnInit(){

  }

  ngAfterViewInit(){

  }
}

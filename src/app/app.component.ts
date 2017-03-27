import {Component, OnInit} from '@angular/core';
import {PaperService} from "./paper/paper.service";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PaperService, AuthService]
})
export class AppComponent implements OnInit{
  constructor(){}

  ngOnInit(){

  }
}

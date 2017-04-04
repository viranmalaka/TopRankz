import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";


@Component({
  selector: 'app-create-paper',
  templateUrl: 'create-paper.component.html',
  styles: []
})

export class CreatePaperComponent implements OnInit, AfterViewInit {
  started = false;
  private numberOfQuestions = 50;
  private arrayQuestions = Array(this.numberOfQuestions).fill(0).map((x,i) => i+1);

  paperForm = new FormGroup({
    name : new FormControl(),
    subject : new FormControl(),
    medium : new FormControl(),
    numQuestion : new FormControl(),
    numAnswers : new FormControl(),
    totalTime : new FormControl(),
    unitMark : new FormControl(),
    random : new FormControl()
  });

  ngOnInit() {

  }

  ngAfterViewInit(){
    console.log(this.arrayQuestions);
  }
}

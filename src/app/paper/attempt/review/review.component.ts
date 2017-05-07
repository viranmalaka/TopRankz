import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AttemptService} from "../../attempt.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styles: [`.Content{
        height:224px;
        overflow:auto;
        background:#fff;
      } 
      .correct{
        background: #c6ffa8; 
      }
      .wrong{
        background: #ffcece;
      }`]
})
export class ReviewComponent implements OnInit, AfterViewInit {

  answers;
  correctCount = 0;
  totalAnswers = 0;

  constructor(private attemptService : AttemptService, private route : ActivatedRoute,
        private router : Router, private authService: AuthService) {
    this.authService.getCheckToken().subscribe(res => {
      if(!res.success){
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      this.attemptService.getReview(this.route.snapshot.params['id']).subscribe(res => {
        if(res.success){
          if(res.res == false){
            toastr.error('Error attempt review');
            this.router.navigate(['/']);
          }else{
            this.answers = res.res['answers'];
            console.log(this.answers);
            this.setCorrectCount();
          }
        }else{

        }
      });
    }
  }

  ngAfterViewInit(){
    setTimeout(function () {
      $('.ui.dropdown').dropdown();
      $('.ui.accordion').accordion();
      $('.ui.radio').checkbox();
    }, 1000)
  }

  setCorrectCount(){
    for (let i = 0; i < this.answers.length; i++) {
      let ans = this.answers[i];
      if(ans.correct) this.correctCount ++;
    }
    this.totalAnswers = this.answers.length;
    console.log(this.correctCount);
  }

  checkAnswer(q, g){
    return (q == g);
  }

  navQuestions(id){
    $('#queContainer').scrollTop = $('#que' + id).offsetTop;
  }
}

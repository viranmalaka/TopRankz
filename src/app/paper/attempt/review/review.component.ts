import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AttemptService} from "../../attempt.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../auth/auth.service";
import {QuestionService} from "../../question.service";
import {queue} from "rxjs/scheduler/queue";

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
  comments = {};

  constructor(private attemptService : AttemptService, private route : ActivatedRoute,
        private router : Router, private authService: AuthService, private queService : QuestionService) {

  }

  ngOnInit() {
    this.authService.getCheckToken().subscribe(res => {
      if(!res.success){
        this.router.navigate(['/login']);
      }else{
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
    });

  }

  ngAfterViewInit(){
    let that = this;
    setTimeout(function () {
      $('.ui.dropdown').dropdown({
        onChange: function(value){
          let data ={
            questionID : $(this).attr('id').substr(1),
            diff : value
          };
          that.queService.postDifficulty(data).subscribe(res => {
            if(res.success){
              console.log('here', res.newDiff);
              for (let i = 0; i < that.answers.length; i++) {
                let obj = that.answers[i];
                if(obj.qId.id == $(this).attr('id').substr(1)){
                  obj.qId.difficulty = res.newDiff;
                  break;
                }
              }
            }
          });
        },
      });
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

  loadComments(id){
    console.log('here');
    this.queService.getComments(id).subscribe(res => {
      if(res.success){
        this.comments[id] = res['comments'];
      }
    });
  }

  putLike(qID, index){
    console.log(qID, index);
    let data = {
      questionID : qID,
      index : index,
    };
    if(this.comments[qID][index].yourLike == undefined){
      data['likes'] = 1;
    }else if(this.comments[qID][index].yourLike == 1){
      data['like'] = 1;
    }
    console.log(data);
    this.queService.postLike(data).subscribe(res => {
      if(res.success){
        this.comments[qID][index].likes = res.likeCount;
        this.comments[qID][index].yourLike = res.yourLike;
        console.log(res.yourLike);
      }
    })
  }

  postComment(id){
    let data = {
      questionID : id,
      comment_body : $('#commentBody' + id).val()
    };
    console.log(data);
    this.queService.postComment(data).subscribe(res => {
      if(res.success){
        this.comments[id] = res.comments;
        $('#commentBody' + id).val('');
      }
    })
  }

  setYourDiff(id, d){
    // console.log('set', id, d);
    return id;
  }

  test(x){
    console.log(x);
    return x;
  }

}

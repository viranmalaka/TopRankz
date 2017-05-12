import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class QuestionService {

  private domainUrl = require('../config')['development'].domainURL;
  private questionDomain = this.domainUrl + 'question/';

  constructor(private _http : Http) { }

  getComments(qid){
    return this._http.get(this.questionDomain + "get_comment?qid=" + qid)
      .map((res: Response) => res.json());
  }


  postLike(data){
    return this._http.post(this.questionDomain + "post_like", data)
      .map((res: Response) => res.json());
  }

  postComment(data){
    return this._http.post(this.questionDomain + "post_comment", data)
      .map((res: Response) => res.json());
  }

  postDifficulty(data){
    return this._http.post(this.questionDomain + "post_diff", data)
      .map((res : Response) => res.json());
  }
}

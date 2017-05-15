import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AttemptService {
  private domainUrl = require('../config')['development'].domainURL;
  private attemptDomain = this.domainUrl + 'attempt/';

  constructor(private _http : Http) { }

  getQuestionInAttempt(id){
    return this._http.get(this.attemptDomain + "get_question_in_attempt?id=" + id)
      .map((res : Response) => res.json());
  }

  getStartAttempt(paper){
    return this._http.get(this.attemptDomain + "get_start_paper?paper=" + paper)
      .map((res : Response) => res.json());
  }

  saveAttemptTemp(data){
    return this._http.post(this.attemptDomain + 'save_attempt_temp', data)
      .map((res : Response) => res.json());
  }

  saveAttemptFinished(data){
    return this._http.post(this.attemptDomain + 'save_attempt_final', data)
      .map((res : Response) => res.json());
  }

  setServerTimeout(paper){
    return this._http.get(this.attemptDomain + "set_timer?paper=" + paper)
      .map((res : Response) => res.json());
  }

  getReview(attemptID){
    return this._http.get(this.attemptDomain + 'get_review?attemptID=' + attemptID)
      .map((res: Response) => res.json());
  }

}

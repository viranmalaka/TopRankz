import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PaperService {
  private domainUrl = require('../config')['development'].domainURL;
  private paperDomain = this.domainUrl + 'paper/';

  constructor(private _http : Http) { }

  getAllPaperNames(){
    return this._http.get(this.paperDomain + "/get_all_paper_names")
      .map((response: Response) => response.json());
  }

  getTitle(){
    return this._http.get("http://localhost:3000/api")
      .map((res : Response) => res.json());
  }

  getUsersSubject(){
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.get(this.domainUrl + 'subject/all_subject_of_user', options)
      .map((res : Response) => res.json());
  }

  postCreateNewPaper(data){
    return this._http.post(this.paperDomain + "new_paper",data)
      .map((res : Response) => res.json());
  }

  setDescription(paper, des){
    let data = {
      paperId : paper,
      description : des
    };
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.post(this.paperDomain + 'set_description', data, options)
      .map((res : Response) => res.json());
  }

  editThisPaper(paperId){
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.get(this.paperDomain + "edit_this_paper?paper_id=" + paperId, options)
      .map((res : Response) => res.json());
  }


  getAllTags(){
    return this._http.get(this.paperDomain + 'get_all_tags')
      .map((res : Response) => res.json());
  }

  submitFinalPaper(paper, questions){
    let data = {paper: paper, questions: questions};
    return this._http.post(this.paperDomain + 'finish_paper', data)
      .map((res : Response) => res.json())
  }

  submitToProofReading(paper, questions){
    let data = {paper: paper, questions: questions};
    return this._http.post(this.paperDomain + 'finish_paper_for_pr', data)
      .map((res : Response) => res.json())
  }

  submitOneQuestion(data){
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.post(this.paperDomain + 'submit_one_question', data, options)
      .map((res : Response) => res.json());
  }

  submitAllQuestions(data){
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.post(this.paperDomain + 'submit_all_questions', data, options)
      .map((res : Response) => res.json());
  }


  getPaperList(subject, type){
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.get(this.paperDomain + "get_paper_id?subject=" + subject + "&type=" + type, options)
      .map((res:Response) => res.json());
  }

  getPaper(id){
    return this._http.get(this.paperDomain + "get_paper?id="+id)
      .map((res: Response) => res.json());
  }

  getPaperById(id){
    return this._http.get(this.paperDomain + "get_paper_by_id?id="+id)
      .map((res: Response) => res.json());
  }

  getQuestion(paper_id, questionsNumber){
    return this._http.get(this.paperDomain + "get_question_in_view?paper="+paper_id + "&q=" + questionsNumber)
      .map((res: Response) => res.json());
  }

  getQuestionsOfPaper(paper){
    let url = "get_questions_of_paper?p="+paper;
    return this._http.get(this.paperDomain + url)
      .map((res: Response) => res.json());
  }

  getNewlyAddedPapers(){
    return this._http.get(this.paperDomain + "get_new_added")
      .map((res: Response) => res.json());
  }

}

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
    return {subjects: [{id : '01', name : 'Sinhala'},
      {id: '02', name :'Chemistry'},
      {id : '03', name : 'Bio'} ]};
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
    return this._http.post(this.paperDomain + 'submit_final_paper', data)
      .map((res : Response) => res.json())
  }

  submitToProofReading(paper, questions){
    let data = {paper: paper, questions: questions};
    return this._http.post(this.paperDomain + 'submit_to_pr', data)
      .map((res : Response) => res.json())
  }
}

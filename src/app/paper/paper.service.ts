import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PaperService {
  private domainUrl = "http://localhost:3000/api/paper/";
  constructor(private _http : Http) { }

  getAllPaperNames(){
    return this._http.get("http://localhost:3000/api/paper/get_all_paper_names")
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
}

import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class ClassGroupService {
  private domainUrl = require('../config')['development'].domainURL;
  private cgDomain = this.domainUrl + 'cg/';

  constructor(private _http : Http) { }

  getClassGroupsByTeacherID(id){
    return this._http.get(this.cgDomain + "/cg_by_teacher_id?q=" + id)
      .map((response: Response) => response.json());
  }
}

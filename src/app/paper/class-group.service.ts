import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class ClassGroupService {
  private domainUrl = require('../config')['development'].domainURL;
  private cgDomain = this.domainUrl + 'class_group/';

  constructor(private _http : Http) { }

  getClassGroupsByTeacherID(id){
    return this._http.get(this.cgDomain + "cg_by_teacher_id?q=" + id)
      .map((response: Response) => response.json());
  }

  getAllClassGroup(){
    return this._http.get(this.cgDomain + "get_all_cg_teacher")
      .map((response: Response) => response.json());
  }

  addCG(n){
    let data = {name : n};
    return this._http.post(this.cgDomain + "add_class_group", data)
      .map((response: Response) => response.json());
  }

  getAllPapersOfTeacher(){
    return this._http.get(this.cgDomain + 'get_all_paper_of_teacher')
      .map((res: Response) => res.json());
  }

  allocatePapers(data){
    return this._http.post(this.cgDomain + "allocate_papers", data)
      .map((response: Response) => response.json());
  }

  dropClassGroup(id){
    return this._http.get(this.cgDomain + 'drop_class_group?id=' + id)
      .map((res: Response) => res.json());
  }

  getUserClassGroups(){
    return this._http.get(this.cgDomain + 'get_class_groups')
      .map((res: Response) => res.json());
  }

  addEnroll(id){
    return this._http.get(this.cgDomain + "get_enroll?id=" + id)
      .map((res : Response) => res.json());
  }
}

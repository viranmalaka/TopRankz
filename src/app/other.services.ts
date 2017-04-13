import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class OtherService {
  private domainUrl = require('./config')['development'].domainURL;
  private schDomain = this.domainUrl + "school/";
  private subjectDomain = this.domainUrl + "subject/";

  constructor(private _http : Http){}

  getAllDistrict(){
    return this._http.get(this.schDomain + 'allDistricts')
      .map((res : Response) => res.json());
  }
  getAllSchools(){
    return this._http.get(this.schDomain + 'allSchools')
      .map((res : Response) => res.json());
  }
  getAllSchoolsByDistrict(data){
    return this._http.get(this.schDomain + 'allSchoolsByDistricts?district=' + data)
      .map((res : Response) => res.json());
  }

  getAllSubjectNames(){
    return this._http.get(this.subjectDomain + 'all_subject_names')
      .map((res : Response) => res.json());
  }


}

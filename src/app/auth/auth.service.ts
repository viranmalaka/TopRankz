import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private domainUrl = require('../config')['development'].domainURL;
  private authDomain =  this.domainUrl + "user/";

  constructor(private _http : Http) {

  }

  postLogin(data){
    return this._http.post(this.authDomain + "login", data)
      .map((response: Response) => response.json());
  }

  postSignUp(data){
    return this._http.post(this.authDomain + 'signup', data)
      .map((response: Response) => response.json());
  }

  getCheckToken(){
    return this._http.get(this.authDomain + 'check?token=' + localStorage.getItem('auth-token'))
      .map((res : Response) => res.json());
  }
}

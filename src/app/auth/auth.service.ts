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

  getExtendedUser() {
    let token = localStorage.getItem('auth-token');
    let user = JSON.parse(localStorage.getItem('user'));
    return this._http.get(this.authDomain + 'extended?token=' + token)
      .map((res : Response) => res.json());
  }

  postDetails(data) {
    let token = localStorage.getItem('auth-token');
    data.token = token;
    console.log(data);
    // return data;
    return this._http.post(this.authDomain + "details", data)
      .map((response: Response) => response.json());
  }

}

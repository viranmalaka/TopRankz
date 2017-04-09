import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
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
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.get(this.authDomain + 'check', options)
      .map((res : Response) => res.json());
  }

  getExtendedUser() {
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.get(this.authDomain + 'full_user_account', options)
      .map((res : Response) => res.json());
  }


  postDetails(data) {
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.post(this.authDomain + "post_details", data, options)
      .map((response: Response) => response.json());
  }

  getUserEnrollments(){
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.get(this.authDomain + 'get_enrollments', options)
      .map((response: Response) => response.json());
  }

  postUserEnrollments(data){
    let options = new RequestOptions({
      headers : new Headers({token : localStorage.getItem('auth-token')})
    });
    return this._http.post(this.authDomain + "post_enrollments", data, options)
      .map((response : Response) => response.json());
  }

  postProfileImage(data){
    let options = new RequestOptions({
      headers : new Headers({
        token : localStorage.getItem('auth-token'),
        // 'Content-Type' : 'multipart/form-data'
      })
    });
    return this._http.post(this.authDomain + "post_profile_picture", data, options)
      .map((response : Response) => response.json());
  }

}

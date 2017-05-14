import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {EmitterVisitorContext} from "@angular/compiler/src/output/abstract_emitter";
import {Subject} from "rxjs";

@Injectable()
export class AuthService {
  private domainUrl = require('../config')['development'].domainURL;
  private authDomain =  this.domainUrl + "user/";

  public loginEventSubject = new Subject();

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

  getLogOut(){
    return this._http.get(this.authDomain + 'logout')
      .map((res : Response) => res.json());
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


  searchTeachersName(txt){
    return this._http.get(this.authDomain + "search_teachers?q=" + txt)
      .map((res : Response) => res.json());
  }

  triggerLogginEvent(){
    this.loginEventSubject.next();
  }

  resetPassword(email){
    let data = {email : email};
    return this._http.post(this.authDomain + "reset_password", data)
      .map((res : Response) => res.json());
  }

  checkPassToken(t){
    return this._http.get(this.authDomain + "check_password_token?token=" + t)
      .map((res : Response) => res.json());
  }

  updatePassword(data){
    return this._http.post(this.authDomain + "update_password", data)
      .map((res : Response) => res.json());
  }
}

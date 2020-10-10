import { Injectable, Type } from '@angular/core';
import { from, Observable } from 'rxjs';
import { LoginPayload } from './auth/login-payload';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import {RegisterPayload} from './auth/register-payload';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl = "http://localhost:8000/api/";

  constructor(private httpClient: HttpClient , private localStorageService : LocalStorageService ) { }

  login(loginpayload: LoginPayload): Observable<boolean>{
    let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.baseurl + 'user/loginUser',loginpayload,{headers:headers}).pipe(map(data =>{
      this.localStorageService.store('loginData', data);
      return true;
    }));
  }


  // register api call
  register(registerPayload: RegisterPayload): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.baseurl + 'user/signup',registerPayload,{headers:headers});
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url = 'http://localhost:3000/api/login';
  constructor(private _http:HttpClient) { }
  signup(user: Login){
   return this._http.post<any>(this._url, user);
  }
}

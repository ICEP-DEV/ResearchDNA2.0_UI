import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 _url = 'http://localhost:3000/api/signup';
  constructor(private _http:HttpClient) { }
  signup(user: User){
   return this._http.post<any>(this._url, user);
  }
}

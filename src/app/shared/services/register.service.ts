import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 _url = 'http://localhost:3000/api/user';
  constructor(private _http:HttpClient) { }
  signup(data:any){
    return this._http.post(this._url,data);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
<<<<<<< HEAD
 _url = 'http://localhost:3000/api/user';
=======
 _url = 'http://localhost:3000/api/signup';
>>>>>>> 0ce4293485ca9d4c58d4d6462a068e28f554ca06
  constructor(private _http:HttpClient) { }
  signup(data:any){
    return this._http.post(this._url,data);
  }
}

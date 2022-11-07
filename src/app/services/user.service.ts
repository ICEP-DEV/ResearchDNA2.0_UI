import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Announcements } from '../models/Announcements';
import { WebRequestService } from '../web-request.service';
import { throwError } from 'rxjs';

const url = 'http://localhost:3000/api/announcement';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 


  constructor(private _http:HttpClient) { }

  apiUrl="http://localhost:3000/projectList/";//projectlist
 usurl ='http://localhost:3000/api/user'
  apmUrl = 'http://localhost:3000/api/announcement'; /// announcement
  delantUrl = 'http://localhost:3000/deleteAnnouncement'; ///DeleteAnnouncement

  getAnnouncements():Observable<any>
    {
          return this._http.get(`${this.apmUrl}`);
    }
    getUsers(){
      return this._http.get(`${this.usurl}`);
    }

     ///delete announcement

     deleteAnnounceData(id:any):Observable<any>
     {
       let ids = id;
       return this._http.delete(`${this.delantUrl}/${ids}`);
     } 
     
  
}

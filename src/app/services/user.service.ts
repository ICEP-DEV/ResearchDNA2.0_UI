import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Announcements } from '../models/Announcements';
import { WebRequestService } from '../web-request.service';
import { throwError } from 'rxjs';
import {submittedproj} from '../models/submittedproj'
import { feedback } from '../feedback';


const url = 'http://localhost:3000/api/announcement';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 


  constructor(private _http:HttpClient) { }

  apiUrl="http://localhost:3000/projectList/";//projectlist
 usurl ='http://localhost:3000/api/feedback';//project
  apmUrl = 'http://localhost:3000/api/announcement'; /// announcement
  delantUrl = 'http://localhost:3000/deleteAnnouncement'; ///DeleteAnnouncement
  stdlurl = 'http://localhost:3000/api/supervisor';

  //get announcements
  getAnnouncements():Observable<any>
    {
          return this._http.get(`${this.apmUrl}`);
    }

    //get project
    getProject():Observable<any>{
      return this._http.get(`${this.usurl}`);
    }
    //get students
    getStudent():Observable<any>{
      return this._http.get(`${this.stdlurl}`);
    }


     ///delete announcement

     deleteAnnounceData(id:any):Observable<any>
     {
       let ids = id;
       return this._http.delete(`${this.delantUrl}/${ids}`);
     } 
     register(user: feedback) {
      return this._http.post(`${this.usurl }`,user);
    }
  
     
  
}

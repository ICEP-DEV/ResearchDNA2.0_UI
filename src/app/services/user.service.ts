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
  
 


  constructor(private _http:HttpClient, private webrequest: WebRequestService) { }

  apiUrl="http://localhost:3000/projectList/";//projectlist
 usurl ='http://localhost:3000/api/project';//project
  apmUrl = 'http://localhost:3000/api/announcement'; /// announcement
  delantUrl = 'http://localhost:3000/deleteAnnouncement'; ///DeleteAnnouncement
  stdlurl = 'http://localhost:3000/api/supervisor';
  furl ='http://localhost:3000/api/feedback';//project
  uurl ='http://localhost:3000/api/user';//project

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
    getSupervisor():Observable<any>{
      return this._http.get(`${this.stdlurl}`);
    }


     ///delete announcement

     deleteAnnounceData(id:any):Observable<any>
     {
       let ids = id;
       return this._http.delete(`${this.delantUrl}/${ids}`);
     }
     //post feedback 
     postFeedback(message: string){
      return this._http.post(this.furl,message);
     }
     //get user
     getUser():Observable<any>
     {
           return this._http.get(`${this.uurl}`);
     }
   
  
     
  
}

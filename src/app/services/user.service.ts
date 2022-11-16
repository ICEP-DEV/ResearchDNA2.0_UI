import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Announcements } from '../models/Announcements';
import { WebRequestService } from '../web-request.service';
import { throwError } from 'rxjs';
import {submittedproj} from '../models/submittedproj'

const url = 'http://localhost:3000/api/announcement';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 


  constructor(private _http:HttpClient) { }

  apiUrl="http://localhost:3000/projectList/";//projectlist
 usurl ='http://localhost:3000/api/project';//project
  apmUrl = 'http://localhost:3000/api/announcement'; /// announcement
  delantUrl = 'http://localhost:3000/deleteAnnouncement'; ///DeleteAnnouncement

  //get announcements
  getAnnouncements():Observable<any>
    {
          return this._http.get(`${this.apmUrl}`);
    }

    //get project
    getProject():Observable<any>{
      return this._http.get(`${this.usurl}`);
    }

     ///delete announcement

     deleteAnnounceData(id:any):Observable<any>
     {
       let ids = id;
       return this._http.delete(`${this.delantUrl}/${ids}`);
     } 
     
  
}

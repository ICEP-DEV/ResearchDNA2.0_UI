import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Announcements } from './Announcements';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 

  constructor(private _http:HttpClient) { }

  apmUrl = 'http://localhost:3000/api/announcement'; /// announcement
  delantUrl = 'http://localhost:3000/deleteAnnouncement'; ///DeleteAnnouncement

  getnoticeLoadFile():Observable<Announcements>
    {
          return this._http.get<Announcements>(`${this.apmUrl}`);
    }

     ///delete announcement

     deleteAnnounceData(id:any):Observable<any>
     {
       let ids = id;
       return this._http.delete(`${this.delantUrl}/${ids}`);
     } 
  
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectUploadService {

   // API url
   _url = 'http://localhost:3000/api/project';

   constructor(private _http:HttpClient) { }

   postProject(data: any){
    return this._http.post<any>(this._url, data);
   }

   // Returns an observable
 
}

import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable,  Subject } from 'rxjs';
import {NumericLiteral} from 'typescript';
import {projectsmodel} from '../shared/models/projects';
@Injectable({
  providedIn: 'root'
})
export class StudentProjectServicesService {
   apiUrl="http://localhost:3000/projectList/";
  constructor(private http: HttpClient) { }
  postProject(data:any){
    return this.http.post<any>("http://localhost:3000/projectList/",data);
  }
  ProjectsList():Observable <projectsmodel[]>{
    return this.http.get<projectsmodel[]>(this.apiUrl);
  }
  GetProjectbycode(id: any): Observable<projectsmodel> {
    return this.http.get<projectsmodel>(this.apiUrl + '/' + id);
  }

  RemoveProjectbycode(id: any) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
  UpdateProject(id: any, dataSource: any) {
    return this.http.put(this.apiUrl + '/' + id, dataSource);
  }
}

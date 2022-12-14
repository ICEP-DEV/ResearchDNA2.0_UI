import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL: any

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3010/api/user/215715213'
   }

   get(uri: string){
     return this.http.get('${this.ROOT_URL}/${uri}');
   }

   post(uri: string, payload:object){
    return this.http.post('${this.ROOT_URL}/${uri}', payload)
   }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { WebRequestService } from './web-request.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webReqservice: WebRequestService) { }

  getstudent(){
    return this.webReqservice.get('signups')
  }

}

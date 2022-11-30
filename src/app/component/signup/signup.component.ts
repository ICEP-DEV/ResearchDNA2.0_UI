import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { Router } from "@angular/router";
import {User} from '../../shared/models/User';
import {RegisterService} from '../../shared/services/register.service';
//import {AuthService} from "../../shared/services/auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userModel = new User( 0,'','','','','','');
  constructor(private service: RegisterService){}
  ngOnInit(): void {}
onSubmit(data: any){
  console.warn(data)
  this.service.signup(data).subscribe((result)=>{
    console.warn(result)
   })

/*this._registrationService.signup(this.userModel).subscribe(
  data =>console.log('success', data),
  error=>console.error('Error!',error)
)
}*/
}
}

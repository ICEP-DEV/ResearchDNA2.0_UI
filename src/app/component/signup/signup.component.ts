import { Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { Router } from "@angular/router";
import {User} from '../../shared/models/User';
import {RegisterService} from '../../shared/services/register.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgToastService } from 'ng-angular-popup';
//import {AuthService} from "../../shared/services/auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  success:any;
  message1:"Success";

popupButton:string;
  userModel = new User( 0,'','','','','','');
<<<<<<< HEAD
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
=======
  constructor(private _registrationService: RegisterService, private toast:NgToastService){}
  ngOnInit(): void {}

onSubmit(){

this._registrationService.signup(this.userModel).subscribe(
  data =>{
    console.log('success', data);
    this.toast.success({detail:"Success message",summary:"Signup Successful",duration:5000});

  },
  error=>{
    console.error('Error!',error);
    this.toast.error({detail:"Success message",summary:"Signup failed, check if user id exists by login in or that all input fields are filled",duration:5000});}

>>>>>>> 0ce4293485ca9d4c58d4d6462a068e28f554ca06
)
}*/
}

}

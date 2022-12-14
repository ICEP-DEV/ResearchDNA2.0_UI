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
  constructor(private _registrationService: RegisterService, private toast:NgToastService, private router: Router){}
  ngOnInit(): void {}

onSubmit(data: any){

this._registrationService.signup(data).subscribe(
  data =>{
    console.log('success', data);
    this.toast.success({detail:"Success message",summary:"Signup Successful",duration:5000});

  },
  error=>{
    console.error('Error!',error);
    this.toast.error({detail:"Success message",summary:"Signup failed, check if user id exists by login in or that all input fields are filled",duration:5000});}

)
this.router.navigate(['/login'])
}

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import {Login} from '../../shared/models/User';
import {LoginService} from '../../shared/services/login.service';
import { NgToastService } from 'ng-angular-popup';



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  animal: string;
  name: string;
  userModel = new Login(0,'');
  constructor(private _loginService: LoginService, private toast:NgToastService, private router: Router){
    
  }
  ngOnInit(): void {}
login(){

this._loginService.signup(this.userModel).subscribe(
  data =>{
    console.log('success', data);
    this.toast.success({detail:"Success message",summary:"Login Successful",duration:5000});
  },
  error=>{
    console.error('Error!',error);
    this.toast.error({detail:"Success message",summary:"Login failed, check if user id exists by signing up",duration:5000});}
)
this.router.navigate(['/dashboard'])
}


}

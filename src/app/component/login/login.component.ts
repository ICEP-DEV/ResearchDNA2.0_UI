import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import {Login} from '../../shared/models/User';
import {LoginService} from '../../shared/services/login.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = new Login(0,'');
  constructor(private _loginService: LoginService){}
  ngOnInit(): void {}
login(){

this._loginService.signup(this.userModel).subscribe(
  data =>console.log('success', data),
  error=>console.error('Error!',error)
)
}
}


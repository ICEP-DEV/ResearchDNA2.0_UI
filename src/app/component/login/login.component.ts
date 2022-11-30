import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import {Login} from '../../shared/models/User';
import {LoginService} from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel = new Login(0,'');
  constructor(private service: LoginService){}
  ngOnInit(): void {}
  login(data: any){
    console.warn(data)
    this.service.login(data).subscribe((result)=>{
      console.warn(result)
     })
    }
}


import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-supervisor-login',
  templateUrl: './supervisor-login.component.html',
  styleUrls: ['./supervisor-login.component.scss']
})
export class SupervisorLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(data: any){

   console.log('successfully logged in')
  }
    

}

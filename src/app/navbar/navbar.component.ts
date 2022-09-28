import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 show:boolean = true;
  constructor(public router: Router) { }
   imports: [MaterialModule]
  ngOnInit(): void {
  }

}

import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { UserService } from '../services/user.service';
import { Announcements} from '../models/Announcements';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs'
import * as XLSX from 'xlsx';






@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  displayedColumns: string[] = ['proj_name'];
  

  constructor(private service:UserService, private route:Router) { }

  readData:any;
  //id:any;
  announcements!: any[];
 

  ngOnInit(): void {

    

    this.service.getAnnouncements().subscribe((announcements: any) =>{
      console.log(announcements,"res==>" );
    
     this.announcements = announcements;
  })
  }
  



  removeHTML(str:any){ 
  var tmp = document.createElement("DIV");
  tmp.innerHTML = str;
  return tmp.textContent || tmp.innerText || "";
    
 }
  

}

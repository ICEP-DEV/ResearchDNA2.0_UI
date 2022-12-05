import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { UserService } from '../services/user.service';
import { Announcements} from '../models/Announcements';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs'




export interface subprojs {
  id: any;

  text: string;
  description: string;
  startDate: Date;
  endDate: Date;
  document: any;
  createdAt: Date;
  updatedAt: Date

 
  
  

}





@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  displayedColumns: string[] = ['proj_name'];
  userIsAuthenticated: boolean | undefined;
  token: null | undefined;
  

  constructor(private service:UserService, private route:Router) { }

  readData:any;
  //id:any;
  announcements!: Announcements[];
  user!: subprojs[];
 

  ngOnInit(): void {

    

    this.service.getAnnouncements().subscribe((announcements: any) =>{
      console.log(announcements,"res==>" );
    
     this.announcements = announcements;
  })

  this.service.getProject().subscribe((user: any) =>{
    console.log(user,"res==>");

    this.user = user;
  })
  }
  



  removeHTML(str:any){ 
  var tmp = document.createElement("DIV");
  tmp.innerHTML = str;
  return tmp.textContent || tmp.innerText || "";
    
 }

 onLogout(){  
  this.token = null;  
  this.userIsAuthenticated = false;   
}  
  
  

}

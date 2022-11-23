import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



export interface studlist {
  id: string;

  firstName: string;
  lastName: string;
  email: string;
  department: string;
  faculty: string;
 password: string
  createdAt: Date;
  updatedAt: Date;
  

}





@Component({
  selector: 'app-studentsl',
  templateUrl: './studentsl.component.html',
  styleUrls: ['./studentsl.component.scss']
})
export class StudentslComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  clickedRows = new Set<studlist>();

  user!: studlist[];
  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.service.getStudent().subscribe((user: any) =>{
      console.log(user,"res==>");
  
      this.user = user;
    })
  }

}

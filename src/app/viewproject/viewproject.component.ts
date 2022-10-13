import { Component, OnInit } from '@angular/core';

export interface Message{
  name: string;
  email: string;
  message: string;
}

export interface Studentproject {
  stud_number: string;
  stud_name: string;
  stud_surname: string;
 
  Faculty:string;
  proj_title:string
}

const STUDENT_DATA: Studentproject[] = [
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga',  Faculty:'ICT', proj_title:'Cyber Security'},
  
];

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {


  displayedColumns: string[] = ['stud_number', 'proj_title'];
  dataSource = STUDENT_DATA;
  clickedRows = new Set<Studentproject>();
  _emailService: any;
  msg:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(){
    this.msg='Successfully sent!';
    return this.msg;
  }
 

}

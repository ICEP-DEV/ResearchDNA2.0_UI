import { Component, OnInit } from '@angular/core';
import { Studentlist } from '../studentlist.model';

export interface Studentlists {
  stud_number: string;
  stud_name: string;
  stud_surname: string;
  Qualification: string;
  Faculty:string;
  proj_title:string
}

const STUDENT_DATA: Studentlists[] = [
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
  {stud_number: '215715213', stud_name: 'Siphesihle Pretty', stud_surname: 'Malinga', Qualification: 'Ndip:Software Development', Faculty:'ICT', proj_title:'Cyber Security'},
];

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.scss']
})
export class StudentslistComponent implements OnInit {
  
  displayedColumns: string[] = ['stud_number', 'stud_name', 'stud_surname', 'Qualification','Faculty','proj_title'];
  dataSource = STUDENT_DATA;
  clickedRows = new Set<Studentlists>();
 
  constructor() { }

  ngOnInit(): void {
  }
  
}

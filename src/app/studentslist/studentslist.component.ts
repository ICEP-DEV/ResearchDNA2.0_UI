import { Component, OnInit } from '@angular/core';
import { Studentlist } from '../studentlist.model';

export interface Studentlists {
  stud_number: string;
  stud_name: string;
  stud_surname: string;
  Qualification: string;
  Faculty:string;
 
}

const STUDENT_DATA: Studentlists[] = [
  {stud_number: '111111111', stud_name: 'Nathi Surprise', stud_surname: 'Mkhonto', Qualification: 'Ndip:Software Development', Faculty:'ICT'},
  {stud_number: '123456789', stud_name: 'SS SSSS', stud_surname: 'Mhlongo', Qualification: 'Ndip:Software Development', Faculty:'ICT'},
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

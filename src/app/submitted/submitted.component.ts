import { Component, OnInit } from '@angular/core';

export interface Studentlist {
 
  stud_numb: number,
  stud_proj: string,
  name:string,
  stud_surn:string

}

const STUDENT_DATA: Studentlist[] = [
  {stud_numb: 214715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 123457641,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 215715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 215715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 215715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 215715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 215715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 214715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 215715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: 215715213 ,name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
];

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {

  searchText = '';
  input: string | undefined
  filter: string | undefined
   ul: string | undefined
   li: string | undefined
   a: string | undefined
   i:string | undefined

  displayedColumns: string[] = ['stud_numb','stud_name','stud_surn','stud_proj'];
  dataSource = STUDENT_DATA;
  clickedRows = new Set<Studentlist>();
  
 
  constructor() { }

  ngOnInit(): void {
  }
   

  
 
  

}

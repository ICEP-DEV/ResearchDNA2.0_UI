import { Component, OnInit } from '@angular/core';

export interface Studentlists {
  stud_proj: string,
  stud_numb: string,
  stud_name:string,
  stud_surn:string

}

const STUDENT_DATA: Studentlists[] = [
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '215715213 ',stud_name:' Siphesihle Pretty ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
];

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {


  displayedColumns: string[] = ['stud_numb','stud_name','stud_surn','stud_proj'];
  dataSource = STUDENT_DATA;
  clickedRows = new Set<Studentlists>();
 
  constructor() { }

  ngOnInit(): void {
  }

}

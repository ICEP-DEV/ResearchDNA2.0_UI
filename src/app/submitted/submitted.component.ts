import { Component, OnInit } from '@angular/core';

export interface Studentlist {
 
  stud_numb: string,
  stud_proj: string,
  name:string,
  stud_surn:string

}
const STUDENT_DATA: Studentlist[] = [
  {stud_numb: '000000000 ',name:' Promise Sphelele ',stud_surn:' Maseko ',stud_proj:' Cyber Security '},
  {stud_numb: '123457641',name:' Oliver Sbusiso ',stud_surn:' Mthombeni ',stud_proj:' Cyber Security '},
  {stud_numb: '666666999' ,name:' Siwe Tibusiso ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  {stud_numb: '245678939' ,name:' Takangwane Precious ',stud_surn:' Malinga ',stud_proj:' Cyber Security '},
  
];



@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText: any;
  heroes = [
    {stud_numb: '000000000 ',name:' Promise Sphelele ',stud_surn:' Maseko ',stud_proj:' Cyber Security '},
  {stud_numb: '123457641',name:' Oliver Sbusiso ',stud_surn:' Mthombeni ',stud_proj:' Cyber Security '},
  {stud_numb: '666666999' ,name:' Siwe Tibusiso ',stud_surn:' Nkosi ',stud_proj:' Cyber Security '},
  {stud_numb: '245678939' ,name:' Takangwane Precious ',stud_surn:' Nkuna ',stud_proj:' Cyber Security '},
  ];
  
 

  
  input: string | undefined
  filter: string | undefined
   ul: string | undefined
   li: string | undefined
   a: string | undefined
   i:string | undefined

  displayedColumns: string[] = ['stud_numb','name','stud_surn','stud_proj'];
  dataSource = STUDENT_DATA 
  clickedRows = new Set<Studentlist>();
  
 
  constructor() { }

  ngOnInit(): void {
  }
   

  
 
  

}

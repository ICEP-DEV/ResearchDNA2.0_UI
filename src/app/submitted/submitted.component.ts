import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


export interface subprojs {
  id: any;

  text: string;
  document: string;
  description: string;
 fName: string;
 Surname: string;
  startDate: Date;
  

}






@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText: any;
  readData:any;
  
  
  user!: subprojs[];
 

  
  input: string | undefined
  filter: string | undefined
   ul: string | undefined
   li: string | undefined
   a: string | undefined
   i:string | undefined

  displayedColumns: string[] = ['stud_numb','name','stud_surn','stud_proj'];
  
  clickedRows = new Set<subprojs>();
  
 
  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.service.getProject().subscribe((user: any) =>{
      console.log(user,"res==>");
  
      this.user = user;
    })
    }
  }
   
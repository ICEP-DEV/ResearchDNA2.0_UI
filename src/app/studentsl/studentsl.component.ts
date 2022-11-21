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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  faculty: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', faculty: 'ICT'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', faculty: 'ICT'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', faculty: 'ICT'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', faculty:'ICT'},
  
];

@Component({
  selector: 'app-studentsl',
  templateUrl: './studentsl.component.html',
  styleUrls: ['./studentsl.component.scss']
})
export class StudentslComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  user!: studlist[];
  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.service.getStudent().subscribe((user: any) =>{
      console.log(user,"res==>");
  
      this.user = user;
    })
  }

}

import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';

export interface Studentproj {
  proj_name: string;
}
export interface Announcement {
  ann_name: string;
  ann_time: string;
  ann_date: string;
}
const ANNOUN_DATA: Announcement[] = [
  {ann_name:'Student Proposal meeting',ann_time:'12:00',ann_date:'11/10/2022'},
  {ann_name:'Student Proposal meeting',ann_time:'12:00',ann_date:'11/10/2022'},
  {ann_name:'Student Proposal meeting',ann_time:'12:00',ann_date:'11/10/2022'},
  {ann_name:'Student Proposal meeting',ann_time:'12:00',ann_date:'11/10/2022'},
  {ann_name:'Student Proposal meeting',ann_time:'12:00',ann_date:'11/10/2022'},
  {ann_name:'Student Proposal meeting',ann_time:'12:00',ann_date:'11/10/2022'},
  {ann_name:'Student Proposal meeting',ann_time:'12:00',ann_date:'11/10/2022'},
  

];


const STUDENT_DATA: Studentproj[] = [
  {proj_name:'Artificial Intelligence.'},
  {proj_name:'Computational & Synthetic Biology.'},
  {proj_name:'Computer Architecture.'},
  {proj_name:'Computing for Development.'},
  {proj_name:'Data Science.'},
  {proj_name:'Data Science.'},
 

];



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  displayedColumns: string[] = ['proj_name'];
  dataSource = STUDENT_DATA;
  clickedRows = new Set<Studentproj>();
  datasource = ANNOUN_DATA;
  

  constructor() { }

  ngOnInit(): void {
    
  }
  

}

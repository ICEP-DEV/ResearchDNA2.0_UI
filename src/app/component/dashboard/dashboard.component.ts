import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentProjectServicesService } from '../../shared/student-project-services.service';
import { projectsmodel } from 'src/app/shared/models/projects';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   show=true;
   finaldata:any;
  dataSource !: projectsmodel[];
  constructor(private dialog: MatDialog, private api: StudentProjectServicesService) { }
  ngOnInit(): void {
    this.loadProjects();
  }
  loadProjects() {
    this.api.ProjectsList().subscribe(response => {
      this.dataSource = response;
      this.finaldata=new MatTableDataSource<projectsmodel>(this.dataSource);
    });
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    events: [
      { title: 'Proposal Submission', date: '2022-11-03' },
      { title: 'event 2', date: '2022-09-17' }
    ]
  };




}

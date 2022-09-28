import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   show=true;
  constructor() { }

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    events: [
      { title: 'Proposal Submission', date: '2022-09-16' },
      { title: 'event 2', date: '2022-09-17' }
    ]
  };




}

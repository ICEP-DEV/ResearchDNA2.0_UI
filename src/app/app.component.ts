import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {UserService} from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'research';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };


}
const countryData = null;

import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {UserService} from './shared/user.service';
import {User} from './shared/models/User';
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
  userModel = new User(216545678,'Mpumi','Gembe','gmpumie@gmail.com','1231314fff','Humanities','Law');


}
const countryData = null;

import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material/material.module';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  imports:[MaterialModule,]
  constructor() { }

  ngOnInit(): void {
  }

}

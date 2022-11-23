import { Component, OnInit } from '@angular/core';







@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {


  
  msg:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(){
    this.msg='Successfully sent!';
    return this.msg;
  }
 

}

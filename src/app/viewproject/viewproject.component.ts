import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';







@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {

  @ViewChild('text') inputName: any; 
  registerSucess:boolean = false;
  
  msg:string | undefined;
  text: string | undefined;
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  clickEvent(message: string){
    
      console.log(message);
this.service.postFeedback(message).subscribe((result)=>{
 console.warn(result)
 this.registerSucess=true;
 
})
    
  }
 
}

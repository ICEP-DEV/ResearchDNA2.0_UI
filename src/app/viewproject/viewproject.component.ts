import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';







@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {


  
  msg:string | undefined;
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  clickEvent(message: string){
    
      console.log(message);
this.service.postFeedback(message).subscribe((result)=>{
 console.warn(result)
})
    
  }
 

}

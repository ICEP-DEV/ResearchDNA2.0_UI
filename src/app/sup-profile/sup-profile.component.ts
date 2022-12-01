import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


export interface supervisor {
  supervisorId: string	
  firstName: string
  lastName: string	
  email: string	
  department: string	
  faculty: string	
  password: string	
  createdAt: Date	
  updatedAt: Date	

}

@Component({
  selector: 'app-sup-profile',
  templateUrl: './sup-profile.component.html',
  styleUrls: ['./sup-profile.component.scss']
})
export class SupProfileComponent implements OnInit {

  public innerWidth: any = 0;
  public innerHeight: any  = 0;
  public inputDivHeigh: any  = 0;
  user!: supervisor[];

  disable: boolean = true;
  formV: any = {lastName: false, firstName: false, password: false};
  pCheck: string = '';
  
  userType: string = "2";
  

 
  constructor(public router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.innerWidth = (window.innerWidth * 0.823) + "px";
    this.innerHeight= (window.innerHeight * 0.9);
    this.inputDivHeigh = (this.innerHeight * 0.7) + "px";
    this.innerHeight= (window.innerHeight * 0.87) + "px";
    console.log(this.innerWidth + "H " + this.innerHeight + "W");

    this.service.getSupervisor().subscribe((user: any) =>{
      console.log(user,"res==>");
  
      this.user = user;
    })
    
  }

  msg = "";
  url:any;
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
    var mimeType = event.target.files[0].type;
		
		
		if(event.target.files && event.target.files[0]){
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
			
		}
  }
}

 

}

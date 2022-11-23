import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sup-profile',
  templateUrl: './sup-profile.component.html',
  styleUrls: ['./sup-profile.component.scss']
})
export class SupProfileComponent implements OnInit {

  public innerWidth: any = 0;
  public innerHeight: any  = 0;
  public inputDivHeigh: any  = 0;

  disable: boolean = true;
  formV: any = {lastName: false, firstName: false, password: false};
  pCheck: string = '';
  
  userType: string = "2";
  

 /* imgChangeEvt: any = '';
  cropImgPreview: any = '';
ChangingImage: boolean | undefined;
imageChangedEvent: any;
croppedImage: string | null | undefined;
  onFileChange(event: any): void {
      this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
      this.cropImgPreview = e.base64;
  }
  imgLoad() {
      // display cropper tool
  }
  initCropper() {
      // init cropper
  }
  
  imgFailed() {
      // error msg
  }
  


UserService: any;
user: any;
userIsAuthenticated: any;
token: null | undefined;*/
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.innerWidth = (window.innerWidth * 0.823) + "px";
    this.innerHeight= (window.innerHeight * 0.9);
    this.inputDivHeigh = (this.innerHeight * 0.7) + "px";
    this.innerHeight= (window.innerHeight * 0.87) + "px";
    console.log(this.innerWidth + "H " + this.innerHeight + "W");

    
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

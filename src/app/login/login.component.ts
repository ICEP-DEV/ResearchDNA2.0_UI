import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  readData:any;
  


  imgChangeEvt: any = '';
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
  token: null | undefined;
  constructor(private service:UserService, private route:Router) {
   
    
   }

  ngOnInit() {
   this.service.getUsers().subscribe((res: any) =>{
      console.log(res,"res==>" );
  
      this.readData = res.data
  });
  }
  ChangingImageclick(){
this.ChangingImage= true;
  }

  saveNewImage(){
    this.ChangingImage = false;
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded(image: LoadedImage) {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}
onLogout(){  
  this.token = null;  
  this.userIsAuthenticated = false;   
}  
  

}

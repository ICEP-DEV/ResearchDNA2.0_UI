import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  student: any;
 ChangingImage : boolean | undefined
 imageChangedEvent: any = '';
    croppedImage: any = '';
    
 
data: any;
  UserService: any;
  constructor() {
    this.data = {}
    
   }

  ngOnInit() {
   this.UserService.getstudent().subscribe((student:any[])=>{
    console.log(student)
   })
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
  

}

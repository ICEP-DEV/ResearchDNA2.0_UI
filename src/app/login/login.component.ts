import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 ChangingImage : boolean | undefined
 imageChangedEvent: any = '';
    croppedImage: any = '';
 
data: any;
  constructor() {
    this.data = {}
    
   }

  ngOnInit(): void {
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

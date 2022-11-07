import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-sup-profile',
  templateUrl: './sup-profile.component.html',
  styleUrls: ['./sup-profile.component.scss']
})
export class SupProfileComponent implements OnInit {
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
  constructor() { }

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
    onLogout(){  
      this.token = null;  
      this.userIsAuthenticated = false;   
    }  
      

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
imgFailed() {
throw new Error('Method not implemented.');
}
initCropper() {
throw new Error('Method not implemented.');
}
imgChangeEvt: any;
imgLoad() {
throw new Error('Method not implemented.');
}
cropImg($event: ImageCroppedEvent) {
throw new Error('Method not implemented.');
}
  student: any;
  ChangingImage : boolean | undefined
  imageChangedEvent: any = '';
     croppedImage: any = '';


 data: any;
   UserService: any;
 user: any;
 userIsAuthenticated: any;
   token: null | undefined;
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
 onLogout(){
   this.token = null;
   this.userIsAuthenticated = false;
 }

}

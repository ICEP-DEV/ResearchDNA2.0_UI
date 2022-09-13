import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { MatLineModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './edit/edit.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './user.service'


@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    
    EditComponent
    
    
 
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatLineModule,
    MatDividerModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatProgressBarModule,
    ImageCropperModule,
    HttpClientModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private api:UserService){

  }
  ngOnInit()
  {
    
  }
 }

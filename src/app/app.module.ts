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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatLineModule,
    MatDividerModule,
    
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,

    ReactiveFormsModule,
  
    MatFormFieldModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

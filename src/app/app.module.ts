import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from "./component/signup/signup.component";
import { PostsComponent } from "./component/posts/posts.component";
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MaterialModule} from './material/material.module';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ProjectsComponent } from './component/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PostsComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    CarouselComponent,
    LoginComponent,
    DashboardComponent,
    ProjectsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    CalendarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

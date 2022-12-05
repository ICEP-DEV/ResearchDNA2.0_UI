import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from "./component/signup/signup.component";
import { PostsComponent } from "./component/posts/posts.component";
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from 'src/footer/footer.component';
import { LandingPageComponent } from 'src/landing-page/landing-page.component';
import {MaterialModule} from './material/material.module';
import { CarouselComponent } from 'src/carousel/carousel.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import { ProfileComponent } from './component/profile/profile.component'; // a plugin!
import { ImageCropperModule } from 'ngx-image-cropper';
import { EditComponent } from './component/edit/edit.component';
import { ProjectcreateComponent } from './component/projects/projectcreate/projectcreate.component';
import { WorkspaceComponent } from './component/workspace/workspace.component';
// import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularFileUploaderModule } from "angular-file-uploader";
// import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ResearchtoolsComponent } from './component/researchtools/researchtools.component';
import {NgToastModule} from 'ng-angular-popup';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

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
    ProfileComponent,
    EditComponent,
    ProjectcreateComponent,
    WorkspaceComponent,
    ResearchtoolsComponent
     
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HTTP_INTERCEPTORS,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ImageCropperModule,
    FormsModule,
    CKEditorModule,
    MatNativeDateModule,
    AngularFileUploaderModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

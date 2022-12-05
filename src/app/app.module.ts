import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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

import {NgToastModule} from 'ng-angular-popup';
import { MatLineModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ResearchtoolsComponent } from './component/researchtools/researchtools.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {UserService} from './services/user.service';

import {MatTableModule} from '@angular/material/table';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SubmittedComponent } from './submitted/submitted.component';

import { SearchbystudentPipe } from './searchbystudent.pipe';
import { HighlightDirective } from './highlight.directive';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { UploadresourceComponent } from './uploadresource/uploadresource.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTabsModule } from '@angular/material/tabs';
import { SupProfileComponent } from './sup-profile/sup-profile.component';
import { ChatboxComponent } from './studentChatbox/Studentchatbox.component';
import { StudentslComponent } from './studentsl/studentsl.component';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SupervisorchatComponent } from './supervisorchat/supervisorchat.component';
import { SupervisorLoginComponent } from './supervisor-login/supervisor-login.component';




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
    ResearchtoolsComponent,
    ChatboxComponent,
    UploadresourceComponent,
    SupProfileComponent,
    
    StudentslComponent,
    ViewprojectComponent,
    HighlightDirective,
    AdmindashboardComponent,
    SubmittedComponent,
    SearchbystudentPipe,
    SupervisorchatComponent,
    SupervisorLoginComponent,
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FullCalendarModule,
    ImageCropperModule,
    CKEditorModule,
    FormsModule,
    MatNativeDateModule,
    AngularFileUploaderModule,
    NgToastModule,
    BrowserModule,
    MatCardModule,
    MatLineModule,
    MatDividerModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatProgressBarModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatTabsModule,
    Ng2SearchPipeModule
   
    
   



  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

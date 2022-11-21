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
import {UserService} from './services/user.service';
import { ResearchtoolsComponent } from './researchtools/researchtools.component';
import {MatTableModule} from '@angular/material/table';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { FormsModule } from '@angular/forms';
import { SearchbystudentPipe } from './searchbystudent.pipe';
import { HighlightDirective } from './highlight.directive';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { UploadresourceComponent } from './uploadresource/uploadresource.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PendingprojectsComponent } from './pendingprojects/pendingprojects.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SupProfileComponent } from './sup-profile/sup-profile.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { StudentslComponent } from './studentsl/studentsl.component';






 


@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    SearchbystudentPipe,
    HighlightDirective,
    
    EditComponent,
          ResearchtoolsComponent,
          AdmindashboardComponent,
          StudentslistComponent,
          SubmittedComponent,
          SearchbystudentPipe,
          HighlightDirective,
          ViewprojectComponent,
          UploadresourceComponent,
          PendingprojectsComponent,
          SupProfileComponent,
          ChatboxComponent,
          StudentslComponent
    
    
 
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
    HttpClientModule,
    MatTableModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatTabsModule
    
    
   
    
    
    
    
    
    
    


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

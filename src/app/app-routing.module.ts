import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { EditComponent } from './edit/edit.component';

import { LoginComponent } from './login/login.component';
import { ResearchtoolsComponent } from './researchtools/researchtools.component';
import { StudentslComponent } from './studentsl/studentsl.component';

import { SubmittedComponent } from './submitted/submitted.component';
import { SupProfileComponent } from './sup-profile/sup-profile.component';
import { UploadresourceComponent } from './uploadresource/uploadresource.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';




const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'edit', component: EditComponent},
  {path:'researchtools', component:ResearchtoolsComponent},
 
  {path:'admindashboard', component:AdmindashboardComponent},
  {path:'viewproject', component:ViewprojectComponent},
  {path:'submitted', component: SubmittedComponent},
  {path:'profile', component:LoginComponent},
  {path:'upload', component:UploadresourceComponent},
  {path:'supprofile', component:SupProfileComponent},
  {path:'chatbox', component:ChatboxComponent},
  {path:'stdl', component:StudentslComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

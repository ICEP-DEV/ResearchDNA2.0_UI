import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {AuthGuard} from './shared/services/auth-guard.service';
import { SignupComponent } from './component/signup/signup.component';
import { PostsComponent } from './component/posts/posts.component';
import{LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './component/login/login.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ProjectsComponent} from './component/projects/projects.component';
import {ProfileComponent} from './component/profile/profile.component';
import { EditComponent } from './component/edit/edit.component';
import {ProjectcreateComponent} from './component/projects/projectcreate/projectcreate.component';
import {WorkspaceComponent} from './component/workspace/workspace.component';
import {ResearchtoolsComponent} from './component/researchtools/researchtools.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { UploadresourceComponent } from './uploadresource/uploadresource.component';
import { SupProfileComponent } from './sup-profile/sup-profile.component';

import { StudentslComponent } from './studentsl/studentsl.component';
import {ChatboxComponent} from './studentChatbox/Studentchatbox.component'



const routes: Routes = [
   {path:'',component:LandingPageComponent},
  {path:"signup", component: SignupComponent},
  {path:"login", component: LoginComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"projects", component: ProjectsComponent,
    children:[
      {path:"newproject",component:ProjectcreateComponent}
    ]},
  {path:"profile",component: ProfileComponent},
  {path:"edit",component: EditComponent},
  {path:"workspace",component: WorkspaceComponent},
  // {path:"**", redirectTo:""},
  {path:"researchtools", component: ResearchtoolsComponent},
  {path:'edit', component: EditComponent},
  {path:'researchtools', component:ResearchtoolsComponent},
 
  {path:'admindashboard', component:AdmindashboardComponent},
  {path:'viewproject', component:ViewprojectComponent},
  {path:'submitted', component: SubmittedComponent},
 
  {path:'upload', component:UploadresourceComponent},
  {path:'supprofile', component:SupProfileComponent},
  {path:'chatbox', component:ChatboxComponent},
  {path:'stdl', component:StudentslComponent},
  {path: 'stuchat' , component:ChatboxComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

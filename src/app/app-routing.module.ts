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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

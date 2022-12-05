import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'src/landing-page/landing-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditComponent } from './component/edit/edit.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProjectcreateComponent } from './component/projects/projectcreate/projectcreate.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ResearchtoolsComponent } from './component/researchtools/researchtools.component';
import { SignupComponent } from './component/signup/signup.component';
import { WorkspaceComponent } from './component/workspace/workspace.component';

const routes: Routes = [{path:'',component:LandingPageComponent},
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
{path:"researchtools", component: ResearchtoolsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

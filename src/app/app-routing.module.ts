import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EditComponent } from './edit/edit.component';

import { LoginComponent } from './login/login.component';
import { ResearchtoolsComponent } from './researchtools/researchtools.component';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';




const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'edit', component: EditComponent},
  {path:'researchtools', component:ResearchtoolsComponent},
  {path:'studentslist',component:StudentslistComponent},
  {path:'admindashboard', component:AdmindashboardComponent},
  {path:'viewproject', component:ViewprojectComponent},
  {path:'submitted', component: SubmittedComponent},
  {path:'profile', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

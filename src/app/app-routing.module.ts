import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';

import { LoginComponent } from './login/login.component';
import { ResearchtoolsComponent } from './researchtools/researchtools.component';




const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'edit', component: EditComponent},
  {path:'researchtools', component:ResearchtoolsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

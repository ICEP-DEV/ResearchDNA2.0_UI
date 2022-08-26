import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { PostsComponent } from './component/posts/posts.component';
import{LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './component/login/login.component'
const routes: Routes = [
   {path:'',component:LandingPageComponent},
  {path:"signup", component: SignupComponent},
  {path:"login", component: LoginComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

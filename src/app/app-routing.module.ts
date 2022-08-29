import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { LoginComponent } from './login/login.component';

=======
import { SignupComponent } from './component/signup/signup.component';
import { PostsComponent } from './component/posts/posts.component';
import{LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './component/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
>>>>>>> Stashed changes
const routes: Routes = [
  {path:'',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

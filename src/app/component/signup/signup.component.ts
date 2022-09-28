import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { Router } from "@angular/router";

import {AuthService} from "../../shared/services/auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 signupForm: FormGroup;
 msg:'Successful register!';
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }
createFormGroup(): FormGroup {
  return new FormGroup({
    studNumber: new FormControl("", [Validators.required, Validators.minLength(9)]),
    firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.minLength(7)]),
    password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    department: new FormControl("", [Validators.required, Validators.minLength(2)]),
    faculty: new FormControl("", [Validators.required, Validators.minLength(2)]),
  });
}
signup(): void {
 // this.authService.signup(this.signupForm.value);
 this.authService.signup(this.signupForm.value).subscribe((msg) => {
  console.log(msg);
 this.router.navigate(["login"]);
});
}
}

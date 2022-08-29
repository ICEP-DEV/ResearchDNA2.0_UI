import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';


import {AuthService} from "../../shared/services/auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 signupForm: FormGroup;
 msg:'gh';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }
createFormGroup(): FormGroup {
  return new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    studNumber: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(7)]),
  });
}
signup(): void {
  this.authService.signup(this.signupForm.value);
}
}

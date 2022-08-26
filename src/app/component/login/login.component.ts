import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }
createFormGroup(): FormGroup {
  return new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)]),
  })
}
login(): void {
  console.log(this.loginForm.value);
}
}

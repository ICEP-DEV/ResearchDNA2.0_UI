import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.editForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.minLength(2)]),
      oldpassword: new FormControl("", [ Validators.minLength(2)]),
      email: new FormControl("", [ Validators.minLength(2)]),
      newpassword: new FormControl("", [ Validators.minLength(2)]),
      confpassword: new FormControl("", [ Validators.minLength(2)]),
    })
  }
  signup(): void {
    console.log(this.editForm.value);
  }

}

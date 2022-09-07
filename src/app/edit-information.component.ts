import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss']
})
export class EditInformationComponent implements OnInit {
  editForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.editForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      studentNo: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.minLength(2)]),
      password: new FormControl("", [Validators.required, Validators.minLength(2)]),
    })
  }
  signup(): void {
    console.log(this.editForm.value);
  }

}

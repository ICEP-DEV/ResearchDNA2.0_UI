import { Component,Inject, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {StudentProjectServicesService} from '../../../shared/student-project-services.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ProjectUploadService} from "../../../shared/project-upload.service";
import { Router } from 'angular-routing';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-projectcreate',
  templateUrl: './projectcreate.component.html',
  styleUrls: ['./projectcreate.component.scss']
})
export class ProjectcreateComponent implements OnInit {
  editdata: any;

  constructor(private router: Router ,private formBuilder: FormBuilder,private dialog: MatDialog, private api :StudentProjectServicesService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.api.GetProjectbycode(this.data.id).subscribe(response => {
        this.editdata = response;
        this.projectform.setValue({
          id: this.editdata.id, projectName: this.editdata.name, projectDate: this.editdata.address, projectType: this.editdata.isactive
        });
      });
    }
  }
  projectform = this.formBuilder.group({
    id: this.formBuilder.control({ value: '', disabled: true }),
    projectName: this.formBuilder.control('', Validators.required),
    projectDate: this.formBuilder.control('', Validators.required),
    projectType: this.formBuilder.control('', Validators.required),
  });
  SaveProject(data: any) {
    if (this.projectform.valid) {
      const Editid = this.projectform.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.api.postProject(data).subscribe(
          data =>{
          this.closepopup();

        });
      } else {
        this.api.postProject(this.projectform.value).subscribe(response => {
          this.closepopup();

        });
      }
    }
  }

  closepopup() {
    this.dialog.closeAll();
  }
  clickEvent(){
 console.log('Successfully created')
 
  }
// file uploader

}

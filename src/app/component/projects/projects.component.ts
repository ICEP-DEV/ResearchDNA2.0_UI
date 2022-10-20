import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectcreateComponent } from "./projectcreate/projectcreate.component";
import { StudentProjectServicesService } from '../../shared/student-project-services.service';
import { projectsmodel } from 'src/app/shared/models/projects';

export interface ProjectElement {
  id: number;
  projectDate: any;
  projectName: string;
  projectType: string;

}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  finaldata:any;
  displayColums: string[] = ['id','projectName','projectDate', 'projectType','action'];
  dataSource !: projectsmodel[];
  constructor(private dialog: MatDialog, private api: StudentProjectServicesService) { }
  ngOnInit(): void {
    this.loadProjects();
  }

  openDialog(id: any) {
    const _popup = this.dialog.open(ProjectcreateComponent, {
      width: "40%",
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    });
    _popup.afterClosed().subscribe(r=>{
     this.loadProjects();
    });
  }
  loadProjects() {
    this.api.ProjectsList().subscribe(response => {
      this.dataSource = response;
      this.finaldata=new MatTableDataSource<projectsmodel>(this.dataSource);
    });
  }
  EditProject(id: any) {
    this.openDialog(id);

  }

  RemoveProject(id: any) {
   /*   alertify.confirm("Remove Project", "do you want remove this project?", () => {
        this.api.RemoveProjectbycode(id).subscribe(r => {
          this.loadProjects();
        });
      }, function () {

      })
*/

  }
}

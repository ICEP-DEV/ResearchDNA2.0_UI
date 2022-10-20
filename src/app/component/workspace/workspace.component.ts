import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ckeditorContent:string;

}

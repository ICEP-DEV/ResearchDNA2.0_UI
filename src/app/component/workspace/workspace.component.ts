import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  providers: [ToolbarService]
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ckeditorContent:string;

}

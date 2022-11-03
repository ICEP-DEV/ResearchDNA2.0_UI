import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
// import { saveDocument } from './textcontrol.js';

// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

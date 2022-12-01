import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadresource',
  templateUrl: './uploadresource.component.html',
  styleUrls: ['./uploadresource.component.scss']
})
export class UploadresourceComponent implements OnInit {



  selectedFile: any | undefined;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
  this.selectedFile=<File>event.target.files[0];
  }

  onUpload(){
const filedata= new FormData();
filedata.append('image',this.selectedFile, this.selectedFile?.name);
this._http.post('http://localhost:3000/api/tools',filedata).subscribe(res=>{
  console.log(res)
})
  }

}

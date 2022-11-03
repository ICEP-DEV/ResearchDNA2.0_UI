import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


export interface Researchdatabase {
  name: string;
  description: string;
}
const ELEMENT_DATA: Researchdatabase[] = [
  { name: 'Google Scholar',  description: ' The same company that produced the world’s top search engine also offers the world’s top scholarly search engine.'},
  { name: 'Web of Knowledge',  description: 'Many academic research services charge a fee. But Web of Knowledge is the most widely used. And this is for a '},
  { name: 'LexisNexis',  description: 'This is the research resource of choice for law school students and lawyers. Of course, this is an expensive service '},
  { name: 'Scopus',  description: 'Scopus is a bibliographical base used by over five thousand academic, governmental, and corporate establishments'},
  
];

@Component({
  selector: 'app-researchtools',
  templateUrl: './researchtools.component.html',
  styleUrls: ['./researchtools.component.scss']
})

export class ResearchtoolsComponent implements OnInit {

  displayedColumns: string[] = [ 'name',  'description'];
  dataSource = ELEMENT_DATA;

  submitted: boolean = false;
  editMode: boolean = false;
  private postId: string | undefined;
  public readonly:boolean = true;


  

  constructor(public route: ActivatedRoute, private router: Router, private formBuilder : FormBuilder) {
    
   }

  ngOnInit(): void {
    
  }
  

}

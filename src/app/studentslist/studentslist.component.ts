import { Component, OnInit } from '@angular/core';
import { Studentlist } from '../studentlist.model';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.scss']
})
export class StudentslistComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  students: Studentlist[] = [
    {
      student_number:'215715213',
    student_name: 'Siphesihle Pretty',
    student_surname: 'Malinga',
    Qualification: 'NDip: Software Development',
        Faculty: 'ICT'
    },
    {
      student_number:'212345780',
      student_name: 'Samkelo Siya',
    student_surname: 'Nkuna',
    Qualification: 'NDip: Business Analyst',
        Faculty: 'ICT'
      },
      {
        student_number:'908222555',
        student_name: 'Mpendulo Pet',
        student_surname: 'Mathebula',
        Qualification: 'NDip: Business Analyst',
            Faculty: 'ICT'
      },
      {
        student_number:'567211213',
        student_name: 'Nontando Faith',
        student_surname: 'Nkosi',
        Qualification: 'NDip: Industrial Intelligence',
            Faculty: 'ICT'
      },
      {
        student_number:'213498333',
        student_name: 'Angel Siphesihle',
        student_surname: 'Malinga',
        Qualification: 'NDip: Multi Media',
            Faculty: 'ICT'
      },
      {
        student_number:'215715213',
        student_name: 'Yandiswa Prince',
        student_surname: 'Shongwe',
        Qualification: 'NDip: Software Development',
            Faculty: 'ICT'
      },
      {
        student_number:'215715213',
        student_name: 'Minah Thabisile',
        student_surname: 'Mathebula',
        Qualification: 'NDip: Networking',
            Faculty: 'ICT'
      },
      {
        student_number:'215715213',
        student_name: 'July Elliot',
        student_surname: 'Malinga',
        Qualification: 'NDip: Informatics',
            Faculty: 'ICT'
      },
      {
        student_number:'215715213',
        student_name: 'Siphesihle Pretty',
        student_surname: 'Malinga',
        Qualification: 'NDip: Software Development',
            Faculty: 'ICT'
      },
      {
        student_number:'215715213',
        student_name: 'Siphesihle Pretty',
        student_surname: 'Malinga',
        Qualification: 'NDip: Software Development',
            Faculty: 'ICT'
      },
      {
        student_number:'215715213',
        student_name: 'Siphesihle Pretty',
        student_surname: 'Malinga',
        Qualification: 'NDip: Software Development',
            Faculty: 'ICT'
      },
      {
        student_number:'215715213',
        student_name: 'Siphesihle Pretty',
        student_surname: 'Malinga',
        Qualification: 'NDip: Software Development',
            Faculty: 'ICT'
      },
      {
        student_number:'215715213',
        student_name: 'Siphesihle Pretty',
        student_surname: 'Malinga',
        Qualification: 'NDip: Software Development',
            Faculty: 'ICT'
      },
     
      
    ];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.scss']
})
export class StudentSubjectsComponent implements OnInit {
  subjects = [
    { name: "Java", noOfTests: 10 },
    { name: "PHP", noOfTests: 10 },
    { name: "Python", noOfTests: 10 },
    { name: ".Net", noOfTests: 10 }
  ];
  pageTitle = "Subjects";

  constructor() { }

  ngOnInit(): void { }

}
  
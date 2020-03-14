import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tutor-subjects",
  templateUrl: "./tutor-subjects.component.html",
  styleUrls: ["./tutor-subjects.component.scss"]
})
export class TutorSubjectsComponent implements OnInit {
  subjects = [
    { name: "Java", noOfTests: 10 },
    { name: "PHP", noOfTests: 10 },
    { name: "Python", noOfTests: 10 },
    { name: ".Net", noOfTests: 10 }
  ];
  pageTitle = "Subjects";

  constructor() {}

  ngOnInit(): void {}
}

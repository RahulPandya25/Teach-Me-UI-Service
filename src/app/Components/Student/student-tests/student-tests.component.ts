import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-tests",
  templateUrl: "./student-tests.component.html",
  styleUrls: ["./student-tests.component.scss"]
})
export class StudentTestsComponent implements OnInit {
  Subject = "Java";
  pageTitle = "Tests";

  tests = [
    { name: "Polymorphism", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    { name: "Arrays", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    { name: "Pointers", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    { name: "Overloading", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    {
      name: "Memory Allocaion",
      noOfQuest: 10,
      totalTime: 15,
      userName: "Rahul"
    },
    { name: "Overriding", noOfQuest: 10, totalTime: 15, userName: "Rahul" }
  ];
  constructor() {}

  ngOnInit(): void {}
}

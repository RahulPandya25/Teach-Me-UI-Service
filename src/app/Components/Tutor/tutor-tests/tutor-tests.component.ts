import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tutor-tests",
  templateUrl: "./tutor-tests.component.html",
  styleUrls: ["./tutor-tests.component.scss"]
})
export class TutorTestsComponent implements OnInit {
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

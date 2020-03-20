import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TestService } from "src/app/Services/test.service";

@Component({
  selector: "app-tutor-tests",
  templateUrl: "./tutor-tests.component.html",
  styleUrls: ["./tutor-tests.component.scss"]
})
export class TutorTestsComponent implements OnInit {
  pageTitle = "Tests";
  subject;
  subjectId;

  tests = [
    {
      id: 1,
      name: "Polymorphism",
      noOfQuest: 10,
      totalTime: 15,
      userName: "Rahul"
    },
    { id: 1, name: "Arrays", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    {
      id: 1,
      name: "Pointers",
      noOfQuest: 10,
      totalTime: 15,
      userName: "Rahul"
    },
    {
      id: 1,
      name: "Overloading",
      noOfQuest: 10,
      totalTime: 15,
      userName: "Rahul"
    },
    {
      id: 1,
      name: "Memory Allocaion",
      noOfQuest: 10,
      totalTime: 15,
      userName: "Rahul"
    },
    {
      id: 1,
      name: "Overriding",
      noOfQuest: 10,
      totalTime: 15,
      userName: "Rahul"
    }
  ];

  goToStudentList(testId: number) {
    this.router.navigate(["tutor/tests/studentList"], {
      queryParams: {
        testId: testId
      }
    });
  }

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.subjectId = params["subjectId"];
    });

    this.testService.getTestsBySubjectId(this.subjectId).subscribe(response => {
      console.log(response);
    });
  }
}

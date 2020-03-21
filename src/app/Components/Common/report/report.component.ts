import { Component, OnInit } from "@angular/core";
import { ConstantsService } from "src/app/Services/constants.service";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionService } from "src/app/Services/question.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"]
})
export class ReportComponent implements OnInit {
  backLink;
  testId;
  subject = "Java";
  test = "Polymorphism";
  user;
  total = "12";
  marks: number = 8.5;

  easyCorrect = 5;
  mediumCorrect = 5;
  hardCorrect = 5;
  easyTotal = 5;
  mediumTotal = 5;
  hardTotal = 5;

  questions = [
    {
      desc: "What is Polymorphism?",
      option1: "option1",
      option2: "option2",
      option3: "option3",
      option4: "option4",
      difficulty: "Hard",
      answer: "option1",
      response: "option1"
    },
    {
      desc: "What is Polymorphism?",
      option1: "option1",
      option2: "option2",
      option3: "option3",
      option4: "option4",
      difficulty: "Medium",
      answer: "option1",
      response: "option2"
    },
    {
      desc: "What is Polymorphism?",
      option1: "option1",
      option2: "option2",
      option3: "option3",
      option4: "option4",
      difficulty: "Medium",
      answer: "option1",
      response: "option3"
    },
    {
      desc: "What is Polymorphism?",
      option1: "option1",
      option2: "option2",
      option3:
        " option3 option3 option3 option3 option3 option3 option3 option3 voption3 option3 option3 option3 option3 option3 option3 option3 option3 v v option3 v  vvoption3 option3",
      option4: "option4",
      difficulty: "Medium",
      answer: "option1",
      response: "option4"
    }
  ];

  references = [
    { link: "https://angular.io/" },
    { link: "https://spring.io/projects/spring-boot" }
  ];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.route.queryParams.subscribe(params => {
      this.testId = params["testId"];
    });

    this.questionService
      .fetchReport(this.user.userId, this.testId)
      .subscribe(response => {
        console.log(response);
      });

    if (this.user.userType === "STUDENT") this.backLink = "/student";
    if (this.user.userType === "TUTOR") this.backLink = "/tutor";
  }
}

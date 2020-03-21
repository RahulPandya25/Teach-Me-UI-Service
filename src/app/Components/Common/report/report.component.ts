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
  user;
  total = "12";
  marks: number = 8.5;

  easyCorrect = 5;
  mediumCorrect = 5;
  hardCorrect = 5;
  easyTotal = 5;
  mediumTotal = 5;
  hardTotal = 5;

  responses;
  questions = [];

  references = [
    { link: "https://angular.io/" },
    { link: "https://spring.io/projects/spring-boot" }
  ];

  findStats() {
    this.questions.forEach(element => {});
  }

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
        this.responses = response;
        this.test = this.responses[0].test;

        this.responses.forEach(element => {
          this.questions.push(element.question);
        });

        console.log(response);
      });

    this.findStats();

    if (this.user.userType === "STUDENT") this.backLink = "/student";
    if (this.user.userType === "TUTOR") this.backLink = "/tutor";
  }
}

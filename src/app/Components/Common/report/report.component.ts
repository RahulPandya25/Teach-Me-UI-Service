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
  marks;
  paramUserId;

  easyCorrect = 0;
  mediumCorrect = 0;
  hardCorrect = 0;
  easyTotal = 0;
  mediumTotal = 0;
  hardTotal = 0;

  responses;
  questions = [];

  references = [
    { link: "https://angular.io/" },
    { link: "https://spring.io/projects/spring-boot" }
  ];

  findStats() {
    this.responses.forEach(element => {
      if (element.question.difficulty === "EASY") {
        this.easyTotal++;
        if (element.response === element.question.answer) this.easyCorrect++;
      }
      if (element.question.difficulty === "MEDIUM") {
        this.mediumTotal++;
        if (element.response === element.question.answer) this.mediumCorrect++;
      }
      if (element.question.difficulty === "HARD") {
        this.hardTotal++;
        if (element.response === element.question.answer) this.hardCorrect++;
      }
    });

    let totalMarks =
      this.easyTotal * 1 + this.mediumTotal * 2 + this.hardTotal * 3;
    let obtainedMarks =
      this.easyCorrect * 1 + this.mediumCorrect * 2 + this.hardCorrect * 3;

    this.marks = (obtainedMarks / totalMarks) * 10;
  }

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.route.queryParams.subscribe(params => {
      this.testId = params["testId"];
      this.paramUserId = params["userId"];
    });

    if (this.user.userType === "STUDENT") this.paramUserId = this.user.userId;

    this.questionService
      .fetchReport(this.paramUserId, this.testId)
      .subscribe(response => {
        this.responses = response;
        this.test = this.responses[0].test;

        this.responses.forEach(element => {
          this.questions.push(element.question);
        });

        this.findStats();
        console.log(response);
      });

    if (this.user.userType === "STUDENT") this.backLink = "/student";
    if (this.user.userType === "TUTOR") this.backLink = "/tutor";
  }
}

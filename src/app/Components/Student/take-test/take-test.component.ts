import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionService } from "src/app/Services/question.service";
import { TestService } from "src/app/Services/test.service";
import { isUndefined } from "util";

@Component({
  selector: "app-take-test",
  templateUrl: "./take-test.component.html",
  styleUrls: ["./take-test.component.scss"]
})
export class TakeTestComponent implements OnInit {
  user;
  testId;
  subjectId;
  subject;

  answer;
  quest;
  loading = false;
  totalQuestions: number;
  remainingQuestions: number = -1;

  submitForm() {
    if (isUndefined(this.answer)) this.answer = "NONE";
    console.log(this.answer);

    // submit ans
    this.questionService
      .submitResponse(this.user.userId, this.quest.questionId, this.answer)
      .subscribe(response => {
        console.log(response);
      });

    if (this.remainingQuestions === 0) {
      this.endTest();
      return;
    }

    console.log("before submitting: " + this.remainingQuestions);
    this.remainingQuestions--;
    this.fetchNextQuestion();
  }

  endTest() {
    this.router.navigateByUrl("/student");
  }

  fetchNextQuestion() {
    this.loading = true;

    this.questionService
      .fetchNextQuestion(this.user.userId, this.testId)
      .subscribe(response => {
        console.log(response);
        this.quest = response;
        this.totalQuestions = this.quest.test.numberOfQuest;
        if (this.remainingQuestions === -1)
          this.remainingQuestions = this.totalQuestions - 1;
      });

    this.loading = false;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.route.queryParams.subscribe(params => {
      this.subjectId = params["subjectId"];
      this.testId = params["testId"];
    });

    this.testService
      .markThisTestAttempted(this.user.userId, this.testId)
      .subscribe(response => {
        console.log(response);
      });

    this.fetchNextQuestion();
  }
}

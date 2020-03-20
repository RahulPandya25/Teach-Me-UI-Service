import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TestService } from "src/app/Services/test.service";

@Component({
  selector: "app-student-tests",
  templateUrl: "./student-tests.component.html",
  styleUrls: ["./student-tests.component.scss"]
})
export class StudentTestsComponent implements OnInit {
  subject;
  subjectId;
  pageTitle = "Tests";

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.subjectId = params["subjectId"];
    });

    this.testService.getTestsBySubjectId(this.subjectId).subscribe(response => {
      this.subject = response;
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SubjectService } from "src/app/Services/subject.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  testId;
  subject;
  subjectId;
  test = "Polymorphism";

  studentList = [
    {
      id: 1,
      name: "Rahul"
    },
    {
      id: 1,
      name: "Rahul"
    },
    {
      id: 1,
      name: "Rahul"
    },
    {
      id: 1,
      name: "Rahul"
    },
    {
      id: 1,
      name: "Rahul"
    }
  ];
  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.testId = params["testId"];
      this.subjectId = params["subjectId"];
    });
    this.subjectService
      .getSubjectBySubjectId(this.subjectId)
      .subscribe(response => {
        this.subject = response;
      });
  }
}

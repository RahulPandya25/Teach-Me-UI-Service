import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  testId;
  subject = "Java";
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
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.testId = params["testId"];
    });
  }
}

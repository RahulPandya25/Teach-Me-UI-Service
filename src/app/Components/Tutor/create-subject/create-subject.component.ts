import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-subject",
  templateUrl: "./create-subject.component.html",
  styleUrls: ["./create-subject.component.scss"]
})
export class CreateSubjectComponent implements OnInit {
  subject = "";
  submitForm() {
    console.log(this.subject);
  }

  constructor() {}

  ngOnInit(): void {}
}
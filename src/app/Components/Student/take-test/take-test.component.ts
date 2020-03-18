import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-take-test",
  templateUrl: "./take-test.component.html",
  styleUrls: ["./take-test.component.scss"]
})
export class TakeTestComponent implements OnInit {
  subject = "Java";
  test = "Polymorphism";
  cheatSheet =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  quest =
    "What is Polymorphism?What is Polymorphism?What is Polymorphism?What is Polymorphism?What is Polymorphism?What is Polymorphism?What is Polymorphism?What is Polymorphism?What is Polymorphism?What is Polymorphism?";
  difficulty = "Medium";
  questRemaining = 8;
  option1 = "OPTION 1OPTION 1OPTION 1OPTION 1OPTION 1OPTION 1OPTION 1";
  option2 = "OPTION 2OPTION 2OPTION 2OPTION 2";
  option3 = "OPTION 3OPTION 3OPTION 3";
  option4 =
    "OPTION 4OPTION 4OPTION 4OPTION 4OPTION 4OPTION 4OPTION 4OPTION 4OPTION 4";

  answer;
  loading = false;

  submitForm() {
    console.log(this.answer);
  }

  endTest() {
    this.router.navigateByUrl("/student/tests");
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}

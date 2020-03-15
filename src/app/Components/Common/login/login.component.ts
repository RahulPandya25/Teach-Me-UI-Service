import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  showLoginForm;
  formTitle;

  email;
  pwd;
  uType;
  name;
  contact;

  submitForm() {
    if (this.showLoginForm) {
      if (this.uType === "Student")
        this.router.navigateByUrl("/student/subjects");
      if (this.uType === "Tutor") this.router.navigateByUrl("/tutor/subjects");
      else console.log(this);
    }
  }

  switchForm() {
    this.showLoginForm = !this.showLoginForm;
    if (this.showLoginForm) this.formTitle = "Login";
    else this.formTitle = "Register";
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showLoginForm = true;
    this.formTitle = "Login";
  }
}

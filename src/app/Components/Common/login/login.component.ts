import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConstantsService } from "src/app/Services/constants.service";

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
      localStorage.setItem("userType", this.uType);
      if (this.uType === "Student") this.router.navigateByUrl("/student");
      if (this.uType === "Tutor") this.router.navigateByUrl("/tutor");
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

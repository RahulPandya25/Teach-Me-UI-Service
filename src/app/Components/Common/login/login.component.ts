import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { ConstantsService } from "src/app/Services/constants.service";
import { LoginService } from "src/app/Services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  showLoginForm;
  user;
  loginForm;
  loginFormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
    // userType: new FormControl("")
  });
  registerForm;
  registerFormGroup = new FormGroup({
    email: new FormControl(""),
    name: new FormControl(""),
    contact: new FormControl(""),
    password: new FormControl(""),
    userType: new FormControl("")
  });

  formTitle;

  submitForm(form) {
    console.log(form.value);

    this.loginService
      .systemIn(form.value, this.showLoginForm)
      .subscribe(response => {
        if (response && response !== null) {
          this.user = Object.assign(response);
          localStorage.setItem("user", JSON.stringify(this.user));

          if (this.user.userType === "STUDENT")
            this.router.navigateByUrl("/student");
          if (this.user.userType === "TUTOR")
            this.router.navigateByUrl("/tutor");
        }
      });
  }

  switchForm() {
    this.showLoginForm = !this.showLoginForm;
    if (this.showLoginForm) this.formTitle = "Login";
    else this.formTitle = "Register";
  }

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.showLoginForm = true;
    this.formTitle = "Login";
  }
}

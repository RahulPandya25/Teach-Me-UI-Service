import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  NgForm,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-upload-test",
  templateUrl: "./upload-test.component.html",
  styleUrls: ["./upload-test.component.scss"]
})
export class UploadTestComponent implements OnInit {
  Subject = "Java";

  private fileList: File;
  selectFile(event: any) {
    this.fileList = event.target.files;
  }

  formElements = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}

  submitForm(form: any) {
    console.log(form);
  }
}

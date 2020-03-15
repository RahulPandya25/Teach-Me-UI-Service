import { Component, OnInit } from "@angular/core";
import { FormsModule, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-upload-test",
  templateUrl: "./upload-test.component.html",
  styleUrls: ["./upload-test.component.scss"]
})
export class UploadTestComponent implements OnInit {
  Subject = "Java";

  private fileList;

  selectFile(event) {
    console.log(event);
    this.fileList = event.target.files;
  }

  submitForm(form: any) {
    // if (
    //   typeof this.fileList !== "undefined" &&
    //   this.fileList.this.fileList.length > 0
    // ) {
    // let file: File = this.fileList[0];
    let formData: FormData = form.value;
    // formData.append("file", file, file.name);

    console.log(formData);
    // }
  }

  myFormGroup = new FormGroup({
    testName: new FormControl(""),
    cheatSheet: new FormControl(""),
    totalQuestion: new FormControl(""),
    totalTime: new FormControl(""),
    references: new FormControl(""),
    file: new FormControl("")
  });

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { TestService } from "src/app/Services/test.service";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-upload-test",
  templateUrl: "./upload-test.component.html",
  styleUrls: ["./upload-test.component.scss"]
})
export class UploadTestComponent implements OnInit {
  Subject = "Java";

  private fileList;

  selectFile(event) {
    this.fileList = event.target.files;
  }

  submitForm(form: any) {
    if (typeof this.fileList !== "undefined" && this.fileList.length > 0) {
      let file: File = this.fileList[0];
      let formData: FormData = new FormData();

      formData.append("file", file, file.name);
      formData.append("testName", form.value.testName);
      formData.append("cheatSheet", form.value.cheatSheet);
      formData.append("totalQuestion", form.value.totalQuestion);
      formData.append("totalTime", form.value.totalTime);
      formData.append("references", form.value.references);

      console.log(form.value);
      console.log(file);
      console.log(formData);

      this.testService.submitTest(formData).subscribe(response => {
        console.log(response);
      });
    }
  }

  myFormGroup = new FormGroup({
    testName: new FormControl(""),
    cheatSheet: new FormControl(""),
    totalQuestion: new FormControl(""),
    totalTime: new FormControl(""),
    references: new FormControl(""),
    file: new FormControl("")
  });

  constructor(private testService: TestService) {}

  ngOnInit(): void {}
}

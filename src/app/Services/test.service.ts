import { Injectable } from "@angular/core";
import { ConstantsService } from "./constants.service";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TestService {
  getTestsBySubjectId(subjectId: number) {
    return this.http.get(
      ConstantsService.BASE_URL + "/subject/test/" + subjectId
    );
  }

  submitTest(formData: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json"
      })
    };
    return this.http.post(
      ConstantsService.BASE_URL + "/test/insert",
      formData,
      httpOptions
    );
  }

  constructor(private http: HttpClient) {}
}

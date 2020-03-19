import { Injectable } from "@angular/core";
import { ConstantsService } from "./constants.service";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TestService {
  getTestsBySubjectId(subjectId: number) {
    return this.http.get(
      ConstantsService.BASE_URL + "/subject/test/" + subjectId
    );
  }

  constructor(private http: HttpClient) {}
}

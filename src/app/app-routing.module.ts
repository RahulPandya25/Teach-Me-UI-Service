import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TutorSubjectsComponent } from "./Components/Tutor/tutor-subjects/tutor-subjects.component";
import { StudentSubjectsComponent } from "./Components/Student/student-subjects/student-subjects.component";
import { PageNotFoundComponent } from "./Components/Common/page-not-found/page-not-found.component";
import { LoginComponent } from "./Components/Common/login/login.component";
import { AboutComponent } from "./Components/Common/about/about.component";
import { UnauthorizedComponent } from "./Components/Common/unauthorized/unauthorized.component";

const routes: Routes = [
  // default route 1
  { path: "", component: LoginComponent },
  // default route 2
  // { path: "", redirectTo: "/tutor/subjects", pathMatch: "full" },

  { path: "tutor/subjects", component: TutorSubjectsComponent },
  { path: "student/subjects", component: StudentSubjectsComponent },
  { path: "about", component: AboutComponent },

  // unauthorize error page
  { path: "unauthorized", component: UnauthorizedComponent },

  // page not found route ALWAYS at last
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

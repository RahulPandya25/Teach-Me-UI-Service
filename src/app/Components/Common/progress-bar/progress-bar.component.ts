import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"]
})
export class ProgressBarComponent implements OnInit {
  createProgressBar(duration) {
    var progressbar = document.getElementById("progress-bar");
    progressbar.className = "progressbar";

    var progressbarinner = document.createElement("div");
    progressbarinner.className = "inner";
    progressbarinner.style.animationDuration = duration;
    progressbarinner.style.height = "50px";
    progressbarinner.style.animation = "progressbar-countdown";
    progressbar.appendChild(progressbarinner);

    progressbarinner.style.animationPlayState = "running";
  }

  constructor() {}

  ngOnInit(): void {
    this.createProgressBar("40s");
  }
}

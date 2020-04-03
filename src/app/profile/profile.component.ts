import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  public toggleBtn;
  constructor() {}

  ngOnInit(): void {
    this.toggleBtn = "password";
  }

  toggle(e) {
    this.toggleBtn = "text";
    console.log(e);
  }
}

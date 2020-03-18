import { StorageService } from "./../../Backend/storage.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header-a",
  templateUrl: "./header-a.component.html",
  styleUrls: ["./header-a.component.css"]
})
export class HeaderAComponent implements OnInit {
  userSession: string = "";
  constructor(public route: Router, public storage: StorageService) {}

  ngOnInit() {
    this.GetSession();
  }
  GetSession = () => {
    let dataSession = this.storage.getUserSettings("user");
    this.userSession = dataSession.name;
  };
  sessionClose = () => {
    this.storage.clearUserSettings("token");
    this.storage.clearUserSettings("user");
    this.storage.cleanAll();
    this.route.navigate(["/"]);
  };
}

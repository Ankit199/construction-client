import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/Backend/shared.service";
import { ViewChild } from "@angular/core";
import { NotificationService } from "src/app/sharedcomponent/tosterNotification/toastr-notification.service";

@Component({
  selector: "app-addsite",
  templateUrl: "./addsite.component.html",
  styleUrls: ["./addsite.component.css"]
})
export class AddsiteComponent implements OnInit {
  stdata: any = [];
  ctdata: any = [];
  stateArray: any = [];

  siteModel: any = {
    state: "",
    city: "",
    site: "",
    address: ""
  };
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(
    private _notificationservice: NotificationService,
    public shareService: SharedService
  ) {}

  ngOnInit() {
    this.GetLocation();
  }
  GetLocation = () => {
    this.shareService.GetLocation().subscribe(
      (_res: any) => {
        if (_res.auth) {
          this.stateArray = _res.data;

          const map = new Map();
          for (const item of this.stateArray) {
            if (!map.has(item.state)) {
              map.set(item.state, true); // set any value to Map
              this.stdata.push({
                id: item.id,
                state: item.state
              });
            }
          }
        } else {
          this._notificationservice.error(
            "Error Occured Please try again later."
          );
        }
      },
      err => {
        console.log(err);
        this._notificationservice.error(
          "Error Occured Please try again later."
        );
      }
    );
  };
  postdata = () => {
    this.shareService.addsite(this.siteModel).subscribe(
      (_res: any) => {
        console.log(_res);
        if (_res.sucess) {
          this.mytemplateForm.reset();
          this.siteModel.state = "";
          this.siteModel.city = "";
          this._notificationservice.success("Record saved successfully");
        } else {
          this._notificationservice.error(
            "Error Occured Please try again later."
          );
        }
      },
      err => {
        console.log(err);
        this._notificationservice.error(
          "Error Occured Please try again later."
        );
      }
    );
  };
  getCity = () => {
    this.ctdata.length = 0;
    this.ctdata = this.stateArray.filter(x => x.state == this.siteModel.state);
  };
}

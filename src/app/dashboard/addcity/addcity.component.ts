import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/Backend/shared.service";
import { NgForm } from "@angular/forms";
import { ViewChild } from "@angular/core";
import { NotificationService } from "src/app/sharedcomponent/tosterNotification/toastr-notification.service";
@Component({
  selector: "app-addcity",
  templateUrl: "./addcity.component.html",
  styleUrls: ["./addcity.component.css"]
})
export class AddcityComponent implements OnInit {
  location: any = {
    state: "",
    city: ""
  };
  stdata: any = [];
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(
    private _notificationservice: NotificationService,
    public shareService: SharedService
  ) {}

  ngOnInit() {
    this.GetLocation();
  }
  addlocation = () => {
    if (this.mytemplateForm.valid) {
      this.shareService.addLocationService(this.location).subscribe(
        (_res: any) => {
          if (_res.sucess) {
            this._notificationservice.success("Record saved successfully.");
            this.mytemplateForm.reset();
            this.GetLocation();
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
    }
  };
  GetLocation = () => {
    this.shareService.GetLocation().subscribe(
      (_res: any) => {
        if (_res.auth) {
          this.stdata = _res.data;
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
}

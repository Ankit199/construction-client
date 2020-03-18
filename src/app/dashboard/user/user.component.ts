import { Component, OnInit, ViewChild } from "@angular/core";
import { NotificationService } from "src/app/sharedcomponent/tosterNotification/toastr-notification.service";
import { SharedService } from "src/app/Backend/shared.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  stdata: any = [];
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  ctdata: any = [];
  stateArray: any = [];
  siteData: any = [];
  userModel: any = {
    state: "",
    sitename: "",
    city: "",
    user: "",
    email: "",
    contact: "",
    role: "",
    password: ""
  };
  roleModel = [
    {
      role: "admin"
    },
    {
      role: "user"
    }
  ];
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(
    private _notificationservice: NotificationService,
    public shareService: SharedService
  ) {}

  ngOnInit() {
    this.GetLocation();
    this.userModel.password = this.randomString(6, "aA");
  }
  GetLocation = () => {
    this.shareService.GetLocation().subscribe(
      (_res: any) => {
        if (_res.auth) {
          this.stateArray = _res.data;
          console.table(this.stateArray);
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
    
    const objModel = {
      site: this.userModel.sitename,
      state: this.userModel.state,
      city: this.userModel.city,
      name: this.userModel.user,
      password: this.userModel.password,
      email: this.userModel.email,
      contact: this.userModel.contact,
      role: this.userModel.role
    };

    this.shareService.addUser(objModel).subscribe(
      (_res: any) => {
        console.log(_res);
        if (_res.auth) {
          this.mytemplateForm.reset();
          this.userModel.state = "";
          this.userModel.city = "";
          this.userModel.sitename = "";
          this.userModel.role = "";
          this._notificationservice.success("Record saved successfully.");
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
    this.ctdata = this.stateArray.filter(x => x.state == this.userModel.state);
  };
  getsiteByCity = () => {
    if (this.userModel.city !== "") {
      this.shareService
        .GetSiteByCity(this.userModel.city)
        .subscribe((_res: any) => {
          if (_res.auth) {
            this.siteData = _res.data;
          }
        });
    } else {
      this.siteData.length = 0;
    }
  };
  randomString = (length, chars) => {
    var mask = "";
    if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
    if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (chars.indexOf("#") > -1) mask += "0123456789";
    if (chars.indexOf("!") > -1) mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
    var result = "";
    for (var i = length; i > 0; --i)
      result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
  };
}

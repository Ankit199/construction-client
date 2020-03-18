import { StorageService } from "./../Backend/storage.service";
import { Component, OnInit } from "@angular/core";
import { SharedService } from "../Backend/shared.service";
import { Router } from "@angular/router";
import { NotificationService } from '../sharedcomponent/tosterNotification/toastr-notification.service';
// import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginModel: any = {
    user: "",
    password: ""
   
  };
  constructor(
    private _notificationservice:NotificationService,
    public sharedService: SharedService,
    public storage: StorageService,
    public route: Router,
    // public toastr:ToastrService
  ) {
    this.storage.cleanAll();
  }

  ngOnInit() {}
  goLogin = () => {
   
    this.sharedService.auth(this.loginModel).subscribe((_res:any)=>{
      console.log(_res);
      if(_res.auth){
       
        this.storage.setSettings("token", _res.token);
        this.GetUserProfile();
      }else{
        console.log("Invalid login detail.");
        this._notificationservice.error("Invalid Login credential. Please try with other");
      }
    },err=>{
      console.log(err);
    })
    //  
   
  };

  
  GetUserProfile = () => {
    this.sharedService.GetUserProfile().subscribe(
      (res: any) => {
        if (res.auth) {
          this.storage.setSettings("user", res.data[0]);

          if (res.data[0].role == "admin") {
            this.route.navigate(["/admin/dashboard/"]);
          }
        }
      },
      err => {
        // this.toastr.error("Error!", "Invaid User", {
        //   timeOut: 2000
        // });
      }
    );
  };
}

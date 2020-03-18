import * as core from "@angular/core";
import { SharedService } from "src/app/Backend/shared.service";
import { ConfirmdialogService } from "src/app/sharedcomponent/confirmation-dialog/confirmdialog.service";
import { NotificationService } from "src/app/sharedcomponent/tosterNotification/toastr-notification.service";

@core.Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"]
})
export class UserlistComponent implements core.OnInit {
  reportData: any = [];
  pageNumber: any = 1;
  constructor(
    private sharedService: SharedService,
    private confirmDialogService: ConfirmdialogService,
    private _notificationservice: NotificationService
  ) {}

  ngOnInit() {
    this.getUserdata();
  }
  getUserdata = () => {
    this.sharedService.getUser({ pagenumber: this.pageNumber }).subscribe(
      (_res: any) => {
        if (_res.auth) {
          this.reportData = this.reportData.concat(_res.data);
        } else {
          this._notificationservice.error(
            "Error Occured Please try again later."
          );
        }
      },
      err => {
        console.error(err);
        this._notificationservice.error(
          "Error Occured Please try again later."
        );
      }
    );
  };

  loadMore = () => {
    this.pageNumber++;
    this.getUserdata();
  };
  showDialog = (dep: any) => {
    let that = this;

    this.confirmDialogService.confirmThis(
      `Are you sure to delete  ${dep.name} user account  ?`,
      function() {
        that.deleteAccount(dep.empID);
      },
      function() {
        console.log("No button pressed");
      }
    );
  };
  deleteAccount = (user: any) => {
    this.sharedService.deleteUser({ empID: user }).subscribe(
      (_res: any) => {
        if (_res.auth) {
          this._notificationservice.success(
            "User account deactivated successfully."
          );
          this.reportData.length = 0;
          this.getUserdata();
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

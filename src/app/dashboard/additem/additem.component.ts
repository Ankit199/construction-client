import { ConfirmdialogService } from "./../../sharedcomponent/confirmation-dialog/confirmdialog.service";
import { SharedService } from "src/app/Backend/shared.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NotificationService } from "src/app/sharedcomponent/tosterNotification/toastr-notification.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-additem",
  templateUrl: "./additem.component.html",
  styleUrls: ["./additem.component.css"]
})
export class AdditemComponent implements OnInit {
  departmentModel: any = {
    department: ""
  };
  dptdata: any = [];
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(
    private _notificationservice: NotificationService,
    private shareservice: SharedService,
    private confirmDialogService: ConfirmdialogService
  ) {}

  ngOnInit() {
    this.getdata();
  }
  postdata = () => {
    this.shareservice.addItemdepartment(this.departmentModel).subscribe(
      (_res: any) => {
        if (_res.auth) {
          this._notificationservice.success("Record saved successfully.");
          this.mytemplateForm.reset();
          this.getdata();
        } else {
          this._notificationservice.error(
            "Error occurred. please try again later."
          );
        }
      },
      err => {
        this._notificationservice.error(
          "Error occurred. please try again later."
        );
        console.error(err);
      }
    );
  };

  getdata = () => {
    this.shareservice.GetItemdepartment().subscribe(
      (_res: any) => {
        if (_res.auth) {
          this.dptdata = _res.data;
        } else {
          this._notificationservice.error(
            "Error ocurred to fetch data from server."
          );
        }
      },
      err => {
        console.error(err);
      }
    );
  };

  showDialog = (dep: any) => {
    let that = this;
    console.log("Fire Event");
    this.confirmDialogService.confirmThis(
      `Are you sure to delete department ${dep} ?`,
      function() {
        
        that.deleteItem(dep);
      },
      function() {
      
      }
    );
  };
  deleteItem = (dep: any) => {
   
    this.shareservice.DeleteItemdepartment(dep).subscribe(
      (_res: any) => {
        if (_res.auth) {
          this.getdata();
          this._notificationservice.success("Record deleted successfully.");
        } else {
          this._notificationservice.error("Record deletion failed");
        }
      },
      err => {
        console.error(err);
        this._notificationservice.error(
          "Error occurred. Please try again later."
        );
      }
    );
  };
}

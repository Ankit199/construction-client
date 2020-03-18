import { SharedService } from "src/app/Backend/shared.service";
import { Component, OnInit } from "@angular/core";
import { ConfirmdialogService } from 'src/app/sharedcomponent/confirmation-dialog/confirmdialog.service';

@Component({
  selector: "app-sitemasterreport",
  templateUrl: "./sitemasterreport.component.html",
  styleUrls: ["./sitemasterreport.component.css"]
})
export class SitemasterreportComponent implements OnInit {
  reportData: any = [];
  constructor(private sharedService: SharedService,  private confirmDialogService: ConfirmdialogService) {}

  ngOnInit() {
    this.GetSiteMasterReport();
  }
  showDialog = (dep: any) => {
    let that = this;
    console.log("Fire Event");
    this.confirmDialogService.confirmThis(
      `Are you sure to delete site master  ${dep} ?`,
      function() {
        
       alert('Working')
      },
      function() {
        alert('Not Working')
      }
    );
  };
  GetSiteMasterReport = () => {
    this.sharedService.GetSiteMasterReport().subscribe(
      (_res: any) => {
      
        if (_res.auth) {
          this.reportData = _res.data;
        }
      },
      err => {
        console.log(err);
      }
    );
  };
}

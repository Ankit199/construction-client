import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Backend/shared.service';
import { ConfirmdialogService } from 'src/app/sharedcomponent/confirmation-dialog/confirmdialog.service';

@Component({
  selector: 'app-site-modulereport',
  templateUrl: './site-modulereport.component.html',
  styleUrls: ['./site-modulereport.component.css']
})
export class SiteModulereportComponent implements OnInit {

  reportData: any = [];
  constructor(private sharedService: SharedService, private confirmDialogService: ConfirmdialogService) {}

  ngOnInit() {
    this.GetSiteModuleReport();
  }
  showDialog = (dep: any) => {
    let that = this;
    console.log("Fire Event");
    this.confirmDialogService.confirmThis(
      `Are you sure to delete ${dep.sitepart} site module for site  ${dep.sitecode} ?`,
      function() {
        
       alert('Working')
      },
      function() {
        alert('Not Working')
      }
    );
  };
  GetSiteModuleReport = () => {
    this.sharedService.GetSiteModuleReport().subscribe(
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

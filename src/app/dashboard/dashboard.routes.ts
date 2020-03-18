import { OutItemComponent } from "./out-item/out-item.component";
import { InItemComponent } from "./in-item/in-item.component";
import { CpasswordComponent } from "./cpassword/cpassword.component";
import { SiteModulereportComponent } from "./site-modulereport/site-modulereport.component";
import { SitemasterreportComponent } from "./sitemasterreport/sitemasterreport.component";
import { ItemmasterreportComponent } from "./itemmasterreport/itemmasterreport.component";
import { BilluploadComponent } from "./billupload/billupload.component";
import { BillreportComponent } from "./billreport/billreport.component";
import { SitepartComponent } from "./sitepart/sitepart.component";
import { AdditemComponent } from "./additem/additem.component";
import { AddsiteComponent } from "./addsite/addsite.component";
import { AddcityComponent } from "./addcity/addcity.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "../guards/auth-guard.service";
import { UserComponent } from "./user/user.component";
import { DashboardComponent } from './dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';

export const dashboardRoute = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    canActivate: [AuthGuardService],
    data: { role: "admin" }
  },
  { path: "site/state", component: AddcityComponent },
  { path: "site", component: AddsiteComponent },
  { path: "site/subsite", component: SitepartComponent },
  { path: "site/item", component: AdditemComponent },
  { path: "site/billreport", component: BillreportComponent },
  { path: "site/billupload", component: BilluploadComponent },
  { path: "site/itemmasterreport", component: ItemmasterreportComponent },
  { path: "site/sitemasterreport", component: SitemasterreportComponent },
  { path: "site/siteModulereport", component: SiteModulereportComponent },
  { path: "user/register", component: UserComponent },
  { path: "user/report", component: UserlistComponent },
  { path: "changepassword", component: CpasswordComponent },
  { path: "stock/In", component: InItemComponent },
  { path: "stock/Out", component: OutItemComponent }
];

export const componentsDashboard = [
  UserlistComponent,
  AddcityComponent,
  HomeComponent,
  AddsiteComponent,
  SitepartComponent,
  AdditemComponent,
  BillreportComponent,
  BilluploadComponent,
  ItemmasterreportComponent,
  SitemasterreportComponent,
  SiteModulereportComponent,
  UserComponent,
  CpasswordComponent,
  InItemComponent,
  OutItemComponent
];

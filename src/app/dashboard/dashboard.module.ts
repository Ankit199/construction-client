import { ConfirmDialogModule } from './../sharedcomponent/confirmation-dialog/confirm-dialog/confirm-dialog.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { dashboardRoute, componentsDashboard } from "./dashboard.routes";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToasterNotificationModule } from "../sharedcomponent/tosterNotification/toaster-notification/toaster-notification.module";
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
 ...componentsDashboard,
 
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToasterNotificationModule,
    ConfirmDialogModule,
    CommonModule,
    RouterModule.forChild(dashboardRoute)
  ]
})
export class dashboardModule {}

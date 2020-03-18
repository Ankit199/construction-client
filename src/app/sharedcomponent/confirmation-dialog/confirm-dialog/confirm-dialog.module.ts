import { ConfirmdialogService } from './../confirmdialog.service';
import { ConfirmationDialogComponent } from './../confirmation-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({  
  imports: [CommonModule],
  declarations: [  
      ConfirmationDialogComponent
  ],  
  exports: [  
    ConfirmationDialogComponent  
  ],providers:[  
    ConfirmdialogService,
    CommonModule 
  ]  
})  
export class ConfirmDialogModule { }

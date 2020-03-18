import { ConfirmdialogService } from './confirmdialog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  message: any;  
    constructor(  
        private confirmDialogService: ConfirmdialogService  
    ) { }  
  
    ngOnInit() {  
        //this function waits for a message from alert service, it gets   
        //triggered when we call this from any other component  
        this.confirmDialogService.getMessage().subscribe(message => {  
            this.message = message;  
        });  
    }  

}

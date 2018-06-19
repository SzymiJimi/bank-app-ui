import {Component, Inject, OnInit} from '@angular/core';
import {ChangePinComponent} from '../change-pin/change-pin.component';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatButton} from '@angular/material';
import {CardManagementService} from '../../card-management.service';


@Component({
  selector: 'app-cancel-card',
  templateUrl: './cancel-card.component.html',
  styleUrls: ['./cancel-card.component.css']
})
export class CancelCardComponent {

  constructor(
    public dialogRef: MatDialogRef<CancelCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cardManageService: CardManagementService) {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  cancelCard(){
    this.cardManageService.blockCard("CANCELLED");
  }
}

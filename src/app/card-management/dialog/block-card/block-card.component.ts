import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ChangePinComponent} from '../change-pin/change-pin.component';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatButton} from '@angular/material';


@Component({
  selector: 'app-block-card',
  templateUrl: './block-card.component.html',
  styleUrls: ['./block-card.component.css']
})
export class BlockCardComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangePinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

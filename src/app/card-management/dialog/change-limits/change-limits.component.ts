import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogActions, MatButton} from '@angular/material';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-limits',
  templateUrl: './change-limits.component.html',
  styleUrls: ['./change-limits.component.css']
})
export class ChangeLimitsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChangeLimitsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }


  name: string;
  animal:string;
  changeLimitsForm: FormGroup;
  dailyWithdrawalLimit: FormControl;
  dailyOperationLimit: FormControl;
  dailyInternetOperationsLimit: FormControl;

  onNoClick(): void {
    this.dialogRef.close();
  }


  createFormControls(){

    this.dailyWithdrawalLimit= new FormControl('',[Validators.required, Validators.pattern("^[0-9]{1,8},[0-9]{2}")]);
    this.dailyOperationLimit= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,8},[0-9]{2}")]);
    this.dailyInternetOperationsLimit= new FormControl('',[Validators.required, Validators.pattern("^[0-9]{1,8},[0-9]{2}")]);

  }

  createForm(){
    this.changeLimitsForm = new FormGroup({
      dailyWithdrawalLimit: this.dailyWithdrawalLimit,
      dailyOperationLimit: this.dailyOperationLimit,
      dailyInternetOperationsLimit: this.dailyInternetOperationsLimit
    });
  }

}

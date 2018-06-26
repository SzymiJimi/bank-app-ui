import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChangeLimitsComponent} from '../change-limits/change-limits.component';


@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.css']
})
export class ChangeAddressComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChangeAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {


  }

  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }


  name: string;
  animal:string;
  changeAddressForm: FormGroup;
  houseNr: FormControl;
  postalCode: FormControl;
  city: FormControl;
  emailAddress: FormControl;

  onNoClick(): void {
    this.dialogRef.close();
  }


  createFormControls(){

    this.houseNr= new FormControl('',[Validators.required, Validators.pattern("^[0-9]{1,3}")]);
    this.postalCode= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}-[0-9]{3}")]);
    this.city= new FormControl('',Validators.required);
    this.emailAddress= new FormControl('',Validators.required);

  }

  createForm(){
    this.changeAddressForm = new FormGroup({
      houseNr: this.houseNr,
      postalCode: this.postalCode,
      city: this.city,
      emailAddress: this.emailAddress,
    });
  }
}

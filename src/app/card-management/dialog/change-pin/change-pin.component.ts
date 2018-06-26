import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogActions, MatButton} from '@angular/material';
import {DialogComponent} from '../dialog.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.component.html',
  styleUrls: ['./change-pin.component.css']
})
export class ChangePinComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<ChangePinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.name= data.name;
    this.animal= data.animal;

  }

  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }


    name: string;
    animal:string;
  newPinForm: FormGroup;
  pinCode: FormControl;
  pinCodeDuplicate: FormControl;


  onNoClick(): void {
    this.dialogRef.close();
  }

  comparePins():boolean{
    console.log("Kod pin: " +this.pinCode.value);
    console.log("drugi kod pin: " +this.pinCodeDuplicate.value);

    if(this.pinCodeDuplicate.value!==null && this.pinCodeDuplicate.value!==undefined && this.pinCodeDuplicate.value!==''){
    return this.pinCodeDuplicate.value === this.pinCode.value;
    }else{
      return false;
    }
  }

  createFormControls(){

    this.pinCode= new FormControl('',[Validators.required, Validators.pattern("^[0-9]{4}")]);
    this.pinCodeDuplicate= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{4}")]);
  }

  createForm(){
    this.newPinForm = new FormGroup({
      pinCode: this.pinCode,
      pinCodeDuplicate: this.pinCodeDuplicate
    });
  }
}

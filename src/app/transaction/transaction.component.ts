import { Component, OnInit } from '@angular/core';
import {UserModel} from '../user/user.model';
import {FormControl, FormGroup, Validators, ReactiveFormsModule, MinLengthValidator} from '@angular/forms';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  constructor() { }

  ownerUserData: UserModel=new UserModel();
  bankAccountNr: string="07 1020 2629 0000 9202 0321 1018";
  avaibleFounds: string="452,34zł";
  today: number = Date.now();

  transactionForm: FormGroup;
  name: FormControl;
  accountNr: FormControl;
  address: FormControl;
  title: FormControl;
  amount: FormControl;
  validator: MinLengthValidator= new MinLengthValidator();


  createFormControls(){

    this.name= new FormControl('', Validators.required);
    this.accountNr= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{26}")]);
    this.address= new FormControl('', Validators.required);
    this.title= new FormControl('', Validators.required);
    this.amount= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,8},[0-9]{2}")]);
  }

  createForm(){
    this.transactionForm = new FormGroup({
      name: this.name,
      accountNr: this.accountNr,
      address: this.address,
      title: this.title,
      amount: this.amount
    });
  }

  ngOnInit() {

    this.ownerUserData.name="Szymon";
    this.ownerUserData.surname="Jarząbek";
    this.ownerUserData.email="rekas1@tlen.pl";

    this.createFormControls();
    this.createForm();

  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, MinLengthValidator, Validators} from '@angular/forms';
import {UserModel} from '../../user/user.model';
import {TransactionDataModel} from '../transaction-data.model';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  constructor(private router: Router) { }

  transactionData: TransactionDataModel= new TransactionDataModel();

  @Output()  sendTransactionDataEvent= new EventEmitter<TransactionDataModel>();

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
  furtherClicked: boolean=false;


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



  continueTransaction(){
    this.transactionData.ownerUserData=this.ownerUserData;
    this.transactionData.bankAccountNr=this.bankAccountNr;
    this.transactionData.avaibleFounds=this.avaibleFounds;
    this.transactionData.transactionDate=this.today;
    this.transactionData.name=this.name.value;
    this.transactionData.accountNr=this.accountNr.value;
    this.transactionData.address=this.address.value;
    this.transactionData.amount=this.amount.value;
    this.transactionData.title=this.title.value;
    this.furtherClicked=true;

    this.sendTransactionDataEvent.emit(this.transactionData);

  }

}

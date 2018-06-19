import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, MinLengthValidator, Validators} from '@angular/forms';
import {UserModel} from '../../user/user.model';
import {TransactionDataModel} from '../transaction-data.model';
import {MatDatepicker, MatExpansionPanel} from '@angular/material';
import {AuthService} from '../../auth/auth.service';
import {BankAccountModel} from '../../model/bank-account.model';
import {BankAccountService} from '../../history/bank-account.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private bankAccountService: BankAccountService) { }

  transactionData: TransactionDataModel= new TransactionDataModel();

  @Output()  sendTransactionDataEvent= new EventEmitter<TransactionDataModel>();

  ownerUserData: UserModel=new UserModel();
  bankAccounts: BankAccountModel[];
  bankAccount: BankAccountModel;
  avaibleFounds: string="452,34zł";
  today: number = Date.now();
  transactionTypeList= ['Zewnętrzny', 'Własny', 'Zdefiniowany'];
  selected: string = 'Zewnętrzny';
  additionalDataOk:boolean= true;

  transactionForm: FormGroup;
  name: FormControl;
  accountNr: FormControl;
  address: FormControl;
  title: FormControl;
  amount: FormControl;
  furtherClicked: boolean=false;
  pernamentOrderSaved=false;


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

    this.ownerUserData= this.authService.loggedUser;
    this.bankAccounts = this.bankAccountService.bankAccounts;
    this.bankAccount= this.bankAccounts[0];
    this.createFormControls();
    this.createForm();

  }



  continueTransaction(){
    this.transactionData.ownerUserData=this.ownerUserData;
    this.transactionData.bankAccountNr=this.bankAccount.accountNumber;
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

  clicked(type: string, panel: MatExpansionPanel,  event: Event) {
    this.selected = type;
    console.log('Panel ' + panel);
    panel.close();
    console.log(this.selected);
    if( this.selected!==('Zewnętrzny' || ''))
    {
      this.additionalDataOk=false;
    }else{
      this.additionalDataOk=true;
    }

  }

  receiveMessage($event) {
    this.pernamentOrderSaved= $event;
    console.log("Wywołałem się");
    console.log(this.pernamentOrderSaved);
    if(this.pernamentOrderSaved===true)
    {
      this.additionalDataOk=true;
    }else{
      this.additionalDataOk=false;
    }
  }

}

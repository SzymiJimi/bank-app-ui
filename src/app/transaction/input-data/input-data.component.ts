import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, MinLengthValidator, Validators} from '@angular/forms';
import {UserModel} from '../../user/user.model';
import {TransactionDataModel} from '../transaction-data.model';
import {MatDatepicker, MatExpansionPanel} from '@angular/material';
import {AuthService} from '../../auth/auth.service';
import {BankAccountModel} from '../../model/bank-account.model';
import {BankAccountService} from '../../history/bank-account.service';
import {BankTransferModel} from '../../model/bank-transfer.model';
import {TransactionService} from '../transaction.service';
import {AccountTransferModel} from '../../model/account-transfer.model';
import {ExternalAccountModel} from '../../model/external-account.model';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private bankAccountService: BankAccountService,
              private tansactionService: TransactionService ) { }

  transactionData: BankTransferModel= new BankTransferModel();
  toAccount : AccountTransferModel = new AccountTransferModel();
  externalAccount: ExternalAccountModel= new ExternalAccountModel(1, "123456789098765432123456");

  @Output()  sendTransactionDataEvent= new EventEmitter<BankTransferModel>();
  @Output()  sendTransactionOwner= new EventEmitter<UserModel>();
  @Output()  sendTransactionAccount= new EventEmitter<BankAccountModel>();

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
    this.amount= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,8}.[0-9]{2}")]);
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
    this.toAccount.idExternalAccount=this.externalAccount;
    this.toAccount.idInternalAccount=this.bankAccountService.bankAccounts[0];
    this.toAccount.recipientAccount=this.accountNr.value;
    this.transactionData.fromAccount=this.bankAccount;
    this.transactionData.dateOfOrder=this.today.toString();
    this.transactionData.dateOfExecution=this.today.toString();
    this.transactionData.recipient=this.name.value;
    this.transactionData.toAccount=this.toAccount;
    this.transactionData.address=this.address.value;
    this.transactionData.amount=this.amount.value;
    this.transactionData.description=this.title.value;
    this.transactionData.state="CREATED";
    this.transactionData.amountStateBefore= this.bankAccount.amount;
    this.transactionData.type= this.transactionTypeList[0];

    this.furtherClicked=true;

    this.sendTransactionDataEvent.emit(this.transactionData);
    this.sendTransactionOwner.emit(this.ownerUserData);
    this.sendTransactionAccount.emit(this.bankAccount);


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

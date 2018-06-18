import {Component, OnInit} from '@angular/core';
import {TransactionDataModel} from './transaction-data.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BankTransferModel} from '../model/bank-transfer.model';
import {UserModel} from '../user/user.model';
import {BankAccountModel} from '../model/bank-account.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ownerUser: UserModel;
  ownerSelectedAccount: BankAccountModel;
  received: boolean = false;
  transactionData: BankTransferModel = new BankTransferModel();
  transactionStatus: boolean = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  receiveMessage($event) {
    this.received = true;
    this.transactionData = $event;
  }

  receiveOwner($event) {

    this.ownerUser = $event;
  }

  receiveAccountData($event) {

    this.ownerSelectedAccount = $event;
  }



  receivedStatus($event) {

    this.transactionStatus = $event;
  }
}

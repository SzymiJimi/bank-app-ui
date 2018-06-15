import {Component, OnInit} from '@angular/core';
import {TransactionDataModel} from './transaction-data.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  received: boolean = false;
  transactionData: TransactionDataModel = new TransactionDataModel();
  transactionStatus: boolean = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  receiveMessage($event) {
    this.received = true;
    this.transactionData = $event;
  }

  receivedStatus($event) {

    this.transactionStatus = $event;
  }
}

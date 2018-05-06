import {Component, OnInit} from '@angular/core';
import {TransactionDataModel} from './transaction-data.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  received: boolean = false;
  transactionData: TransactionDataModel = new TransactionDataModel();
  transactionStatus: boolean = false;

  receiveMessage($event) {
    this.received = true;
    this.transactionData = $event;
  }

  receivedStatus($event) {

    this.transactionStatus = $event;
  }
}

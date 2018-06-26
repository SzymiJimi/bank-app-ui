import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransactionDataModel} from '../transaction-data.model';
import {UserModel} from '../../user/user.model';
import {BankAccountModel} from '../../model/bank-account.model';
import {BankTransferModel} from '../../model/bank-transfer.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  @Input() transactionData: BankTransferModel=new BankTransferModel();
  @Input() ownerUserData: UserModel=new UserModel();
  @Input() bankAccountData: BankAccountModel=new BankAccountModel();

  @Output() transactionStatusEvent= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }




  finishTransaction(){
    console.log("Jestem tutaj i emituje status!");
    this.transactionStatusEvent.emit(true);
  }

}

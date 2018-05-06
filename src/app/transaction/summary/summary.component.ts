import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransactionDataModel} from '../transaction-data.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  @Input() transactionData: TransactionDataModel=new TransactionDataModel();

  @Output() transactionStatusEvent= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  formatAccountNr(accountNr: string): string{
    let formattedAccountNumber: string='';
    let slicedString: string;
    slicedString=accountNr.slice(0,2);
    formattedAccountNumber=formattedAccountNumber+slicedString;
    slicedString=accountNr.slice(2,6);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=accountNr.slice(6,10);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=accountNr.slice(10,14);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=accountNr.slice(14,18);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=accountNr.slice(18,22);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=accountNr.slice(22,26);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    return formattedAccountNumber;
  }


  finishTransaction(){
    console.log("Jestem tutaj!");
    this.transactionStatusEvent.emit(true);
  }

}

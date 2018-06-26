import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransactionDataModel} from '../transaction-data.model';
import {UserModel} from '../../user/user.model';
import {BankAccountModel} from '../../model/bank-account.model';
import {BankTransferModel} from '../../model/bank-transfer.model';
import {TransactionService} from '../transaction.service';
import {MatStepper} from '@angular/material';
import {AuthService} from '../../auth/auth.service';
import {BankAccountService} from '../../history/bank-account.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  @Input() transactionData: BankTransferModel=new BankTransferModel();
  @Input() ownerUserData: UserModel=new UserModel();
  @Input() bankAccountData: BankAccountModel=new BankAccountModel();
  @Input() stepper: MatStepper;

  @Output() transactionStatusEvent= new EventEmitter<boolean>();

  constructor(private tansactionService: TransactionService, private authService: AuthService, private accountService:BankAccountService) { }

  ngOnInit() {
    this.tansactionService.makeTransaction(this.transactionData).then(value => {
      this.code = value as string;
    });
  }

  code:string;
  userInputCode: string;
  counter: number=0;
  resultMessage="";

  finishTransaction() {

    if (this.userInputCode === this.code) {
      this.resultMessage = "Poprawny kod";
      this.tansactionService.registerTransaction(this.transactionData).then(value => {
        this.accountService.getAccountList(this.authService.loggedUser.idUser);
        this.transactionStatusEvent.emit(true);
        this.stepper.next();
      });

    }else{
      this.counter++;
      this.resultMessage="Zły kod";

    }

  }


}

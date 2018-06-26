///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDatepickerInputEvent} from '@angular/material';
import {UserModel} from '../user/user.model';
import {FormControl} from '@angular/forms';
import {Element} from '../history/history.component';
import {AuthService} from '../auth/auth.service';
import {BankAccountModel} from "../model/bank-account.model";

import { BankAccountService } from "../history/bank-account.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  bankAccounts: BankAccountModel[];
  bankAccount: BankAccountModel;
  creditCards: CreditCardModel[];
  creditCard: CreditCardModel;

  transactionHistory: BankTransferModel[];
  displayedColumns = ['date', 'recipient', 'sender', 'title', 'amount', 'balanceAfterTransaction'];

  dataSource;
  selectedOperationType: string = '';
  dateFromPicker: Date;
  selectedPeriod: string = '';

  datePickerSelectedDate = new FormControl(null);

  constructor( private authService: AuthService, private  bankAccountService: BankAccountService, private creditCardService: CardInformationService) { }
  user: UserModel = new UserModel();
  // bankAccounts: BankAccountModel[];
  // bankAccount: BankAccountModel;
  ngOnInit() {

    this.user= this.authService.loggedUser;

      this.bankAccount= this.bankAccountService.bankAccount;

      this.bankAccountService.getHistoryAccount().then(value => {
        this.transactionHistory= this.bankAccountService.transferHistory;
        this.dataSource = new MatTableDataSource<BankTransferModel>(this.transactionHistory);
      });
    // });

  }

}

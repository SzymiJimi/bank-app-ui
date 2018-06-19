///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDatepickerInputEvent} from '@angular/material';
import {UserModel} from '../user/user.model';
import {FormControl} from '@angular/forms';
import {Element} from '../history/history.component';
import {AuthService} from '../auth/auth.service';

import {BankTransferModel} from '../model/bank-transfer.model';
import {BankAccountService} from '../history/bank-account.service';
import {CardInformationService} from '../card-management/card-information/card-information.service';
import {BankAccountModel} from '../model/bank-account.model';
import {CreditCardModel} from '../model/credit-card.model';


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
  // transactionData: Element[] = [
  //   {
  //     date: '07/05/2018',
  //     recipient: 'Szymon Dudek',
  //     sender: 'Szymon Jarzabek',
  //     title: 'Przelew za uslugi remontowe w domu oraz poza domem u sądsiada oraz u mojej siostry z poza miasta',
  //     amount: '22.30zł',
  //     balanceAfterTransaction: '452,34zł'
  //   },
  //   {
  //     date: '06/05/2018',
  //     recipient: 'Szymon Dudek',
  //     sender: 'Szymon Jarzabek',
  //     title: 'Przelew',
  //     amount: '-22.30zł',
  //     balanceAfterTransaction: '452.34zł'
  //   },
  //   {
  //     date: '05/05/2018',
  //     recipient: 'Szymon Dudek',
  //     sender: 'Szymon Jarzabek',
  //     title: 'Przelew',
  //     amount: '22.30zł',
  //     balanceAfterTransaction: '452.34zł'
  //   },
  //   {
  //     date: '04/05/2018',
  //     recipient: 'Szymon Dudek',
  //     sender: 'Szymon Jarzabek',
  //     title: 'Przelew',
  //     amount: '-22.30zł',
  //     balanceAfterTransaction: '452.34zł'
  //   },
  //   {
  //     date: '03/05/2018',
  //     recipient: 'Szymon Dudek',
  //     sender: 'Szymon Jarzabek',
  //     title: 'Przelew',
  //     amount: '22.30zł',
  //     balanceAfterTransaction: '452.34zł'
  //   },
  //   {
  //     date: '02/05/2018',
  //     recipient: 'Szymon Dudek',
  //     sender: 'Szymon Jarzabek',
  //     title: 'Przelew',
  //     amount: '-22.30zł',
  //     balanceAfterTransaction: '452.34zł'
  //   },
  //   {
  //     date: '01/05/2018',
  //     recipient: 'Szymon Dudek',
  //     sender: 'Szymon Jarzabek',
  //     title: 'Przelew',
  //     amount: '22.30zł',
  //     balanceAfterTransaction: '452.34zł'
  //   },
  // ];




  // displayedColumns = ['date', 'recipient', 'sender', 'title', 'amount', 'balanceAfterTransaction'];
  dataSource;
  selectedOperationType: string = '';
  dateFromPicker: Date;
  selectedPeriod: string = '';




  constructor(private authService: AuthService, private  bankAccountService: BankAccountService, private creditCardService: CardInformationService) { }


  datePickerSelectedDate = new FormControl(null);

  constructor( private authService: AuthService, private bankAccountService: BankAccountService) { }
  user: UserModel = new UserModel();
  bankAccounts: BankAccountModel[];
  bankAccount: BankAccountModel;
  ngOnInit() {

    this.user= this.authService.loggedUser;
    this.bankAccountService.getAccountList(this.user.idUser).then(value => {
      this.bankAccounts= this.bankAccountService.bankAccounts;
      this.bankAccount= this.bankAccounts[0];

      this.bankAccountService.getHistoryAccount().then(value => {
        this.transactionHistory= this.bankAccountService.transferHistory;
        this.dataSource = new MatTableDataSource<BankTransferModel>(this.transactionHistory);
      });
    });


  }

}

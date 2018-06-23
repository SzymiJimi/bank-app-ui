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



  transactionData: Element[] = [
    {
      date: '07/05/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew za uslugi remontowe w domu oraz poza domem u sądsiada oraz u mojej siostry z poza miasta',
      amount: '22.30zł',
      balanceAfterTransaction: '452,34zł'
    },
    {
      date: '06/05/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '-22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '05/05/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '04/05/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '-22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '03/05/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '02/05/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '-22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '01/05/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
  ];


  displayedColumns = ['date', 'recipient', 'sender', 'title', 'amount', 'balanceAfterTransaction'];
  dataSource = new MatTableDataSource<Element>(this.transactionData);
  selectedOperationType: string = '';
  dateFromPicker: Date;
  selectedPeriod: string = '';




  datePickerSelectedDate = new FormControl(null);

  constructor( private authService: AuthService, private bankAccountService: BankAccountService) { }
  user: UserModel = new UserModel();
  bankAccounts: BankAccountModel[];
  bankAccount: BankAccountModel;
  ngOnInit() {
    this.user = this.authService.loggedUser;
    this.bankAccounts = this.bankAccountService.bankAccounts;
    this.bankAccount = this.bankAccounts[0];

  }

}

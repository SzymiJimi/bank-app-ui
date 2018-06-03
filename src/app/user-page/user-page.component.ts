///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDatepickerInputEvent} from '@angular/material';
import {UserModel} from '../user/user.model';
import {FormControl} from '@angular/forms';
import {Element} from '../history/history.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  name:String="Szymon Dudek";
  amount:Number=10000000;
  type:String="Konto dla mlodych";
  number:String="95 2034 4294 4241 4201";

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


  user: UserModel = new UserModel();
  bankAccountNr: string = '07 1020 2629 0000 9202 0321 1018';
  balance: string = '452.34zł';
  blockedFounds: string = '23.15zł';
  debitLimit: string = '500zł';
  avaibleFounds: string = '952.34zł';
  datePickerSelectedDate = new FormControl(null);

  constructor() { }

  ngOnInit() {
    this.user.name="Szymon";
    this.user.surname="Dudek";

  }

}

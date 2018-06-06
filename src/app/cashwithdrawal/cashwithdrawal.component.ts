import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CashwithdrawlDataModel} from './cashwithdrawl-data.model';
import {UserModel} from '../user/user.model';
import {MatTableDataSource} from '@angular/material';
import {MatFormFieldControl} from '@angular/material';

@Component({
  selector: 'app-cashwithdrawal',
  templateUrl: './cashwithdrawal.component.html',
  styleUrls: ['./cashwithdrawal.component.css']
})
export class CashwithdrawalComponent implements OnInit {

  constructor() { }

  cashWithdrawl: CashwithdrawlDataModel = new CashwithdrawlDataModel();

  @Output()  sendTransactionDataEvent= new EventEmitter<CashwithdrawlDataModel>();

  ownerUserData: UserModel = new UserModel();
  bankAccountNr = '07 1020 2629 0000 9202 0321 1018';
  avaibleFounds = '452,34zł';

  userData: Element[] = [
    {
      name: 'Cycus',
      surname: 'Glancus',
      pesel: '96091108334',
      amount: '500',
      number: '07 1020 2629 0000 9202 0321 1018'
    },
    {


      name: 'Cycus',
      surname: 'Glancus',
      pesel: '96091108334',
      amount: '5000',
      number: '07 1020 2629 0000 9202 0321 1018'
    },
    {


      name: 'Cycus',
      surname: 'Glancus',
      pesel: '96191108334',
      amount: '500',
      number: '07 1020 2629 0000 9202 0321 1018'
    },
  ];

  onClick() {

   this.ownerUserData.name = 'Szymon';
    this.ownerUserData.surname = 'Szymon';
    this.avaibleFounds = '500';
    this.bankAccountNr = '07 1020 2629 0000 9202 0321 1018';
  }

  ngOnInit() {

  }

  displayedColumns = ['name' , 'surname' , 'pesel' , 'amount' , 'number'];
  dataSource = new MatTableDataSource<Element>(this.userData);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
export interface Element {
  name: string;
  surname: string;
  pesel: string;
  amount: string;
  number: string;
}

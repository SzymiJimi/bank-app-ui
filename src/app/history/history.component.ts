import {Component, Injectable, OnInit, ViewChild,ViewEncapsulation} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSelect} from '@angular/material';
import {UserModel} from '../user/user.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns = ['date', 'recipient', 'sender', 'title', 'amount', 'balanceAfterTransaction'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  user: UserModel=new UserModel();
  bankAccountNr: string="07 1020 2629 0000 9202 0321 1018";
  balance: string="452,34zł";
  blockedFounds: string="23,15zł";
  debitLimit: string="500zł";
  avaibleFounds:string="952,34zł";

  ngOnInit() {
    this.user.name="Szymon";
    this.user.surname="Jarząbek";

    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  date: string;
  recipient: string;
  sender: string;
  title: string;
  amount: string
  balanceAfterTransaction: string
}

const ELEMENT_DATA: Element[] = [
  {date: '07/05/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '06/05/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '05/05/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '04/05/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '03/05/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '02/05/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '01/05/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '30/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '29/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '28/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '27/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '26/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '25/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '24/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '23/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},
  {date: '22/04/2018', recipient: 'Szymon Dudek', sender: 'Szymon Jarzabek', title: 'Przelew', amount: '22,30zł', balanceAfterTransaction: '452,34zł'},



];

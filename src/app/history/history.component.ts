///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDatepickerInputEvent} from '@angular/material';
import {UserModel} from '../user/user.model';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() {

  }

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
    {
      date: '30/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '29/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Mateusz Jarzabek',
      title: 'Przelew',
      amount: '-17.30zł',
      balanceAfterTransaction: '554.34zł'
    },
    {
      date: '28/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '27/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '26/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '-22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '25/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '24/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '-22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '23/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
    {
      date: '22/04/2018',
      recipient: 'Szymon Dudek',
      sender: 'Szymon Jarzabek',
      title: 'Przelew',
      amount: '-22.30zł',
      balanceAfterTransaction: '452.34zł'
    },
  ];

  displayedColumns = ['date', 'recipient', 'sender', 'title', 'amount', 'balanceAfterTransaction'];
  dataSource = new MatTableDataSource<Element>(this.transactionData);
  selectedOperationType: string = '';
  dateFromPicker: Date;
  selectedPeriod: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;


  minDate = new Date(2018, 5, 2);
  maxDate = new Date(2018, 9, 24);

  user: UserModel = new UserModel();
  bankAccountNr: string = '07 1020 2629 0000 9202 0321 1018';
  balance: string = '452.34zł';
  blockedFounds: string = '23.15zł';
  debitLimit: string = '500zł';
  avaibleFounds: string = '952.34zł';
  datePickerSelectedDate = new FormControl(null);


  ngOnInit() {
    this.user.name = 'Szymon';
    this.user.surname = 'Jarząbek';
    let date: Date = new Date();

    this.dataSource.paginator = this.paginator;

    if (date.getMonth() < 6) {
      this.minDate.setFullYear(date.getFullYear() - 1);
      this.minDate.setMonth(11 + (date.getMonth() - 6));
    } else {
      this.minDate.setFullYear(date.getFullYear());
      this.minDate.setMonth(date.getMonth() - 6);
    }
    this.minDate.setDate(1);
  }

  compateDates(stringDate: string, dateFromDatepicker: Date): boolean {

    let converterStringDate: Date = new Date();
    let tmpString: string = '';

    tmpString = stringDate.slice(0, 2);
    converterStringDate.setDate(Number(tmpString));
    tmpString = stringDate.slice(3, 5);
    converterStringDate.setMonth(Number(tmpString) - 1);
    tmpString = stringDate.slice(6, 10);
    converterStringDate.setFullYear(Number(tmpString));
    return converterStringDate >= dateFromDatepicker;
  }

  compateDateWithTimePeriod(elementDate: string): boolean {

    let todayDate: Date = new Date();

    switch (this.selectedPeriod) {
      case 'week': {
        todayDate.setMilliseconds(todayDate.getMilliseconds() - 604800000);
        break;
      }
      case 'month': {
        if (todayDate.getMonth() >= 1) {
          todayDate.setMonth(todayDate.getMonth() - 1);
        } else {
          todayDate.setMonth(11);
          todayDate.setFullYear(todayDate.getFullYear() - 1);
        }

        break;
      }
      case 'quarter': {
        if (todayDate.getMonth() >= 3) {
          todayDate.setMonth(todayDate.getMonth() - 3);
        } else {
          todayDate.setMonth(0);
        }
        break;
      }
    }

    let converterStringDate: Date = new Date();
    let tmpString: string = '';

    tmpString = elementDate.slice(0, 2);
    converterStringDate.setDate(Number(tmpString));
    tmpString = elementDate.slice(3, 5);
    converterStringDate.setMonth(Number(tmpString) - 1);
    tmpString = elementDate.slice(6, 10);
    converterStringDate.setFullYear(Number(tmpString));

    return converterStringDate >= todayDate;
  }


  changeDateFromPicker(event: MatDatepickerInputEvent<Date>) {
    this.dateFromPicker = event.value;
  }


  checkTypeTransaction(amount: string): boolean {
    let tmpAmpunt = amount.slice(0, amount.length - 2);
    let amountNumber: number = Number(tmpAmpunt);
    if (amountNumber >= 0 && this.selectedOperationType == 'incomming') {
      return true;
    } else {
      return amountNumber < 0 && this.selectedOperationType == 'outgoing';
    }
  }

  resetSelects() {
    this.selectedOperationType = '';
    this.selectedPeriod = '';
    this.datePickerSelectedDate = new FormControl(null);
    this.dateFromPicker = null;
  }

  generatePdf(){
    // let doc = new jsPDF();
    // doc.text(20,20,'Hello world');
    // doc.save('Test.pdf');
  }

  filterData() {

    if (this.dateFromPicker !== null && this.dateFromPicker !== undefined) {

      this.dataSource = new MatTableDataSource<Element>(this.transactionData.filter(data => {
          return this.compateDates(data.date, this.dateFromPicker);
        }
      ));

      if (this.selectedOperationType !== '') {
        this.dataSource = new MatTableDataSource<Element>(this.dataSource.data.filter(data => {
            return this.checkTypeTransaction(data.amount);
          }
        ));
      }
      this.resetSelects();
    } else {
      if (this.selectedPeriod !== '' && this.selectedOperationType !== '') {
        this.dataSource = new MatTableDataSource<Element>(this.transactionData.filter(data => {
            return this.compateDateWithTimePeriod(data.date);
          }
        ));
        this.dataSource = new MatTableDataSource<Element>(this.dataSource.data.filter(data => {
            return this.checkTypeTransaction(data.amount);
          }
        ));
      } else {
        if (this.selectedOperationType !== '') {
          this.dataSource = new MatTableDataSource<Element>(this.transactionData.filter(data => {
              return this.checkTypeTransaction(data.amount);
            }
          ));
        }else{
          this.dataSource = new MatTableDataSource<Element>(this.transactionData);
        }
      }
      this.resetSelects();
    }

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
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



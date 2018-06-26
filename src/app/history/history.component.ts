///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDatepickerInputEvent} from '@angular/material';
import {UserModel} from '../user/user.model';
import {FormControl} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {BankAccountModel} from '../model/bank-account.model';
import {BankAccountService} from './bank-account.service';
import {CreditDataService} from '../user-credit/credit-data.service';
import {CreditCardModel} from '../model/credit-card.model';
import {CardInformationService} from '../card-management/card-information/card-information.service';
import {BankTransferModel} from '../model/bank-transfer.model';
import {subscribeToIterable} from 'rxjs/internal-compatibility';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private authService: AuthService, private  bankAccountService: BankAccountService, private creditCardService: CardInformationService) {

  }


  transactionHistory: BankTransferModel[];

  displayedColumns = ['date', 'recipient', 'sender', 'title', 'amount', 'balanceAfterTransaction'];

  selectedOperationType: string = '';
  dateFromPicker: Date;
  selectedPeriod: string = '';
  today: Date = new Date();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  minDate = new Date(2018, 5, 2);
  maxDate = new Date(2018, 9, 24);

  user: UserModel;
  bankAccounts: BankAccountModel[];
  bankAccount: BankAccountModel;
  creditCards: CreditCardModel[];
  creditCard: CreditCardModel;
  blockedFounds: number = 23.15;
  datePickerSelectedDate = new FormControl(null);
  dataSource;

  ngOnInit() {
    console.log(this.today.getMonth().toString(2));

    this.user = this.authService.loggedUser;
    this.bankAccounts=  this.bankAccountService.bankAccounts;
    this.bankAccount= this.bankAccounts[0];
    this.creditCards= this.creditCardService.userCards;
    this.creditCard= this.creditCards[0];
    let date: Date = new Date();



    this.bankAccountService.getHistoryAccount().then(value => {
      this.transactionHistory= this.bankAccountService.transferHistory;
      this.transactionHistory.reverse();
      this.dataSource = new MatTableDataSource<BankTransferModel>(this.transactionHistory);
      this.dataSource.paginator = this.paginator;
    });

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

    const converterStringDate: Date = new Date();
    let tmpString = '';

    tmpString = stringDate.slice(0, 2);
    converterStringDate.setDate(Number(tmpString));
    tmpString = stringDate.slice(3, 5);
    converterStringDate.setMonth(Number(tmpString) - 1);
    tmpString = stringDate.slice(6, 10);
    converterStringDate.setFullYear(Number(tmpString));
    return converterStringDate >= dateFromDatepicker;
  }

  compateDateWithTimePeriod(elementDate: string): boolean {

    const todayDate: Date = new Date();

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

    const converterStringDate: Date = new Date();
    let tmpString = '';

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
    const tmpAmpunt = amount.slice(0, amount.length - 2);
    const amountNumber: number = Number(tmpAmpunt);
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

      this.dataSource = new MatTableDataSource<BankTransferModel>(this.transactionHistory.filter(data => {
          return this.compateDates(data.dateOfOrder, this.dateFromPicker);
        }
      ));

      if (this.selectedOperationType !== '') {
        this.dataSource = new MatTableDataSource<BankTransferModel>(this.dataSource.data.filter(data => {
            return this.checkTypeTransaction(data.amount);
          }
        ));
      }
      this.resetSelects();
    } else {
      if (this.selectedPeriod !== '' && this.selectedOperationType !== '') {
        this.dataSource = new MatTableDataSource<BankTransferModel>(this.transactionHistory.filter(data => {
            return this.compateDateWithTimePeriod(data.dateOfOrder);
          }
        ));
        this.dataSource = new MatTableDataSource<BankTransferModel>(this.dataSource.data.filter(data => {
            return this.checkTypeTransaction(data.amount);
          }
        ));
      } else {
        if (this.selectedOperationType !== '') {
          this.dataSource = new MatTableDataSource<BankTransferModel>(this.transactionHistory.filter(data => {
              return this.checkTypeTransaction(data.dateOfOrder);
            }
          ));
        }else{
          this.dataSource = new MatTableDataSource<BankTransferModel>(this.transactionHistory);
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
  amount: string;
  balanceAfterTransaction: string;
}



import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-loginhistory',
  templateUrl: './loginhistory.component.html',
  styleUrls: ['./loginhistory.component.css']
})
export class LoginhistoryComponent implements OnInit {

  constructor() { }

  loginData: Element[] = [
    {
     name: 'Szymon',
      surname: 'Dudek',
      number: '1234 1234 1234 1234',
      date: '06/06/2018'
    },
    {
      name: 'Szymon',
      surname: 'Dudek',
      number: '1234 1234 1234 1234',
      date: '06/06/2017'
    },
    {
      name: 'Szymon',
      surname: 'Dudek',
      number: '1234 1234 1234 1234',
      date: '02/06/2018'
    },
    {
      name: 'Szymon',
      surname: 'Dudek',
      number: '1234 1234 1234 1234',
      date: '06/05/2018'
    },
    {
      name: 'Szymon',
      surname: 'Dudek',
      number: '1234 1234 1234 1234',
      date: '06/06/2018'
    }
];
  displayedColumns = ['name', 'surname', 'number', 'date'];
  dataSource = new MatTableDataSource<Element>(this.loginData);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

}
export interface Element {
  name: string;
  surname: string;
  number: string;
  date: string;

}

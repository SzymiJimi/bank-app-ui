import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDatepickerInputEvent} from '@angular/material';

import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-findclient',
  templateUrl: './findclient.component.html',
  styleUrls: ['./findclient.component.css']
})
export class FindclientComponent implements OnInit {

  constructor() { }


  userData: Element[] = [
    {
      name: 'Szymon',
      surname: 'Dudek',
      pesel: '1234567891',
      type: 'Konto dla mlodych',
      number: '07 1020 2629 0000 9202 0321 1018'
    },
    {
      name: 'Szymon',
      surname: 'NieDudek',
      pesel: '1234567891',
      type: 'Konto dla mlodych',
      number: '07 1020 2629 0000 9202 0321 1018'
    },
    {
      name: 'Szymon',
      surname: 'Dudek',
      pesel: '1234567891',
      type: 'Konto dla mlodych',
      number: '07 1020 2629 0000 9202 0321 1018'
    },
    {
      name: 'Szymon',
      surname: 'Dudek',
      pesel: '1234567891',
      type: 'Konto dla mlodych',
      number: '07 1020 2629 0000 9202 0321 1018'
    },
    {
      name: 'Szymon',
      surname: 'Dudek',
      pesel: '1234567891',
      type: 'Konto dla mlodych',
      number: '07 1020 2629 0000 9202 0321 1018'
    },
    {
      name: 'Cycus',
      surname: 'Glancus',
      pesel: '96091108334',
      type: 'Konto dla mlodych',
      number: '07 1020 2629 0000 9202 0321 1018'
    }
  ];

  displayedColumns = ['name' , 'surname' , 'pesel' , 'type' , 'number'];
  dataSource = new MatTableDataSource<Element>(this.userData);
  ngOnInit() {
  }

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
  type: string;
  number: string;
}



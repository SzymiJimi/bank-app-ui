import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() {
  }



  favoriteData: Element[] = [
    {

      name: 'Szymon',
      surname: 'Jarzabek',
      type: 'Dla mlodych',
      adres: 'Żarczyce Małe',
      number: '1234 1234 1234 1234'
    },
    {

      name: 'Szymon',
      surname: 'Jarzabek',
      type: 'Dla mlodych',
      adres: 'Żarczyce Małe',
      number: '1234 1234 1234 1234'
    },
    {

      name: 'Szymon',
      surname: 'Jarzabek',
      type: 'Dla mlodych',
      adres: 'Żarczyce Małe',
      number: '1234 1234 1234 1234'
    },
    {

      name: 'Szymon',
      surname: 'Jarzabek',
      type: 'Dla mlodych',
      adres: 'Żarczyce Małe',
      number: '1234 1234 1234 1234'
    },

  ];

  displayedColumns = ['name', 'surname', 'adres', 'type', 'number'];
  dataSource = new MatTableDataSource<Element>(this.favoriteData);
  ngOnInit() {
  }
}
  export interface Element {
  name: string;
  surname: string;
  adres: string;
  type: string;
  number: string;
}



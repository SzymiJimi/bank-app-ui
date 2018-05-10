import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  currentMonth = 'Kwiecień';
  selledCredits = 255;
  moneyTurnover = '23 003 342';
  newClientsAmount = 153;
  selledInvestments = 98;

  constructor() {
  }

  ngOnInit() {
  }

  // feather.replace()



}

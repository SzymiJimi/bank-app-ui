import { Component, OnInit } from '@angular/core';
import {InvestmentModel} from './investment.model';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.investments.push(new InvestmentModel(1, "Lokata grosz do grosza", "20.02.2018", "15","400.00", "03"));
    this.investments.push(new InvestmentModel(2, "Lokata pierdziosza", "17.07.2017", "5","700.00", "20"));
  }

  investments: InvestmentModel[] = [];


  clickedNewInvestment(){

  }
}

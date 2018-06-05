import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-investment',
  templateUrl: './new-investment.component.html',
  styleUrls: ['./new-investment.component.css']
})
export class NewInvestmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headTitle="Lokata";

  isLinear = true;
  maxInvestment = 60000;
  minInvestment = 1000;
  investmentSize = 1000;
  insurance=false;

  contributionNumber=3;
  minContribution=6;
  maxContribution=24;

  investmentRate=2.5;
  installmentAmount=400;
  provision=7.99;

}

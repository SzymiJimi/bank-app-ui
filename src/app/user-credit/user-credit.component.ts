import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CreditDataService} from './credit-data.service';

@Component({
  selector: 'app-user-credit',
  templateUrl: './user-credit.component.html',
  styleUrls: ['./user-credit.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserCreditComponent implements OnInit {

  constructor(private data: CreditDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.messageFromService = message);
    this.setLoadData();
  }

  messageFromService: string;

  headTitle="Kredyt gotówkowy";

  isLinear = true;
  autoTicks = false;
  disabled = false;
  invert = false;
  maxLoan = 60000;
  minLoan = 1000;
  showTicks = false;
  step = 100;
  thumbLabel = false;
  loanSize = 1000;
  vertical = false;
  insurance=false;

  installmentNumber=3;
  minInst=3;
  maxInst=60;

  interestRate=18;
  interestRateWithInsurance=20;
  installmentAmount=400;
  provision=7.99;

  changedValue(){
    console.log("Wartość się zmieniła");
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + ' 000';
    }

    return value;
  }

  setLoadData(){
    if(this.messageFromService==="cashLoan")
    {
      this.headTitle="Kredyt gotówkowy";
      this.minLoan=1000;
      this.maxLoan=60000;
      this.interestRate=9;
      this.interestRateWithInsurance=11;
      this.provision= 7.99;
    }else{
      if(this.messageFromService==="mortgage")
      {
        this.headTitle="Kredyt hipoteczny";
        this.loanSize=50000;
        this.minLoan=50000;
        this.maxLoan=1000000;
        this.interestRate=14;
        this.interestRateWithInsurance=17;
        this.provision= 5.99;
      }
    }
  }
}

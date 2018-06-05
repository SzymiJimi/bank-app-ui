import { Component, OnInit } from '@angular/core';
import {CreditDataService} from '../../user-credit/credit-data.service';

@Component({
  selector: 'app-user-credits',
  templateUrl: './user-credits.component.html',
  styleUrls: ['./user-credits.component.css']
})
export class UserCreditsComponent implements OnInit {

  constructor(private data: CreditDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);

  }

  clickedCashCredit(){
    this.data.changeMessage("cashLoan");
  }

  clickedMortgage(){
    this.data.changeMessage("mortgage");

  }

  message: string;

}

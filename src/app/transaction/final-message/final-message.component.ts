import {Component, Input, OnInit} from '@angular/core';
import {BankTransferModel} from '../../model/bank-transfer.model';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-final-message',
  templateUrl: './final-message.component.html',
  styleUrls: ['./final-message.component.css']
})
export class FinalMessageComponent implements OnInit {


  @Input() stepper: MatStepper;

  constructor() {
  }

  ngOnInit() {
  }

}

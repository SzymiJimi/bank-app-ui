import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms';


@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})

export class CashComponent implements OnInit {

 cashForm: FormGroup;
  name: FormControl;
  surname: FormControl;
  pesel: FormControl;
  sum: FormControl;

  createFormControls() {

    this.name = new FormControl('', Validators.required);
    this.surname = new FormControl('', Validators.required);
    this.pesel = new FormControl('', [Validators.required,  Validators.pattern('^[0-9]{11}')] );
    this.sum = new FormControl('', [Validators.required]);
  }

createForm() {
    this.cashForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      pesel: this.pesel,
      sum: this.sum
    });
  }


  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  

}

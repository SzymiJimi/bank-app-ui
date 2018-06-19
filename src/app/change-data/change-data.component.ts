import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.css']
})

export class ChangeDataComponent implements OnInit {



 changedataForm: FormGroup;
  name: FormControl;
  surname: FormControl;
  pesel: FormControl;

  createFormControls() {

    this.name = new FormControl('', Validators.required);
    this.surname = new FormControl('', Validators.required);
    this.pesel = new FormControl('', [Validators.required,  Validators.pattern('^[0-9]{11}')] );

  }

createForm() {
    this.changedataForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      pesel: this.pesel
    });
}


  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }


}

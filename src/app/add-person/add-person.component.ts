import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})

export class AddPersonComponent implements OnInit {

 addpersonForm: FormGroup;
  name: FormControl;
  surname: FormControl;
  pesel: FormControl;
  

  createFormControls() {

    this.name = new FormControl('', Validators.required);
    this.surname = new FormControl('', Validators.required);
    this.pesel = new FormControl('', [Validators.required,  Validators.pattern('^[0-9]{11}')] );
 
  }

createForm() {
    this.addpersonForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      pesel: this.pesel,
   
    });
  }


  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  

}


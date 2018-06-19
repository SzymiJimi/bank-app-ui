import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-add-person-end',
  templateUrl: './add-person-end.component.html',
  styleUrls: ['./add-person-end.component.css']
})
export class AddPersonEndComponent implements OnInit {

addpersonendForm: FormGroup;
  name: FormControl;
  surname: FormControl;
  pesel: FormControl;
  citizenship:FormControl;
  fathername:FormControl;
  mothername:FormControl;
  phone:FormControl;
  mothernmaiden:FormControl;
  adress:FormControl;
  correspondence:FormControl;
  napis = ' ';
  

  createFormControls() {

    this.name = new FormControl('', Validators.required);
    this.surname = new FormControl('', Validators.required);
    this.pesel = new FormControl('', [Validators.required,  Validators.pattern('^[0-9]{11}')] );
    this.citizenship = new FormControl('', Validators.required);
    this.fathername = new FormControl('', Validators.required);
    this.mothername = new FormControl('', Validators.required);
    this.mothernmaiden = new FormControl('', Validators.required);
    this.adress = new FormControl('', Validators.required);
    this.correspondence = new FormControl('', Validators.required);
    this.phone = new FormControl('',[Validators.required, Validators.pattern('^[0-9]{11}') ] );
  }

createForm() {
    this.addpersonendForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      pesel: this.pesel,
      citizenship: this.citizenship,
      fathername: this.fathername,
      mothername: this.mothername,
      mothernmaiden: this.mothernmaiden,
      adress: this.adress,
      correspondence: this.correspondence,
      phone: this.phone,

    });
  }


  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
 
 onClick(event)
 {
   this.napis = 'Dodano osobę upoważnioną';
 }

}

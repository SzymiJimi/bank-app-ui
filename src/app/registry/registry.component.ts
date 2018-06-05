import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  registryForm: FormGroup;
  name: FormControl;
  surname: FormControl;
  login: FormControl;
  password: FormControl;
  email: FormControl;
  pesel: FormControl;
  phone: FormControl;



  createFormControls() {

    this.name = new FormControl('', Validators.required);
    this.login = new FormControl('', Validators.required);
    this.surname = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]);
    this.phone = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]);
    this.pesel = new FormControl('', [Validators.required,  Validators.pattern('^[0-9]{11}')] );
  }

  createForm() {
    this.registryForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      login: this.login,
      password: this.password,
      email: this.email,
      pesel: this.pesel,
      phone: this.phone
    });
  }

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

}

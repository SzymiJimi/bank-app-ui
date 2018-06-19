import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  registryForm: FormGroup;
  name: FormControl;
  surname: FormControl;
  citizenship: FormControl;
  mothersName: FormControl;
  fathersName: FormControl;

  // login: FormControl;
  // password: FormControl;
  // email: FormControl;
  peselNumber: FormControl;
  telephoneNumber: FormControl;
  cardNumber: FormControl;


  createFormControls() {
    this.citizenship = new FormControl('', Validators.required);
    this.mothersName = new FormControl('', Validators.required);
    this.fathersName = new FormControl('', Validators.required);
    this.cardNumber = new FormControl('' , Validators.required);
    this.name = new FormControl('', Validators.required);
    //this.login = new FormControl('', Validators.required);
    this.surname = new FormControl('', Validators.required);
   // this.password = new FormControl('', Validators.required);
   // this.email = new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]);
    this.telephoneNumber = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]);
    this.peselNumber = new FormControl('', [Validators.required,  Validators.pattern('^[0-9]{11}')] );
  }

  createForm() {
    this.registryForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      citizenship: this.citizenship,
      mothersName: this.mothersName,
      fathersName: this.fathersName,
      //idCardNumber: this.cardNumber,
      // login: this.login,
      // password: this.password,
      // email: this.email,
      peselNumber: this.peselNumber,
      telephoneNumber: this.telephoneNumber
    });
  }

  generateCardId() {
    this.cardNumber = Math.floor((Math.random() * 999999) + 100000);
    (<HTMLInputElement>document.getElementById('idCardNumber')).innerHTML = 'NSK'+  this.cardNumber;
  }

  send() {
    const data = JSON.stringify(this.registryForm.value);
    const data2 = JSON.parse(data);
    console.log(data);
    console.log(data2);
    this.http.post('http://localhost:8080/person/new', JSON.parse(data) ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(res => {
        console.log(res);
      });
  }


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  constructor( private http: HttpClient) {

  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../user/user.model";

@Component({
  selector: 'app-newworker',
  templateUrl: './newworker.component.html',
  styleUrls: ['./newworker.component.css']
})
export class NewworkerComponent implements OnInit {

  registryForm: FormGroup;
  emailForm: FormGroup;
  name: FormControl;
  surname: FormControl;
  citizenship: FormControl;
  mothersName: FormControl;
  fathersName: FormControl;
  mothersMaidenName: FormControl;
  // login: FormControl;
  // password: FormControl;
  // email: FormControl;
  peselNumber: FormControl;
  telepohoneNumber: FormControl;
  idcardNumber: FormControl;


  createFormControls() {
    this.citizenship = new FormControl('', Validators.required);
    this.mothersName = new FormControl('', Validators.required);
    this.fathersName = new FormControl('', Validators.required);
    this.idcardNumber = new FormControl('' , Validators.required);
    this.name = new FormControl('', Validators.required);

    this.surname = new FormControl('', Validators.required);
    this.mothersMaidenName = new FormControl('', Validators.required);
    this.telepohoneNumber = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]);
    this.peselNumber = new FormControl('', [Validators.required,  Validators.pattern('^[0-9]{11}')] );
  }

  createForm() {
    this.registryForm = new FormGroup({
      name: this.name,
      surname: this.surname,
      citizenship: this.citizenship,
      mothersName: this.mothersName,
      fathersName: this.fathersName,
      idCardNumber: this.idcardNumber,
      // login: this.login,
      // password: this.password,
      // email: this.email,
      peselNumber: this.peselNumber,
      // email: this.email,
      telepohoneNumber: this.telepohoneNumber,
      mothersMaidenName: this.mothersMaidenName
    });
  }

  // // createemailForm() {
  //    this.emailForm = new FormGroup({
  //      email: this.email
  //  });
  //  }


  sendManager() {
    const data = JSON.stringify(this.registryForm.value);


    console.log(data);
    this.http.post('http://localhost:8080/worker/new', JSON.parse(data) ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(res => {

        console.log('res w send' + JSON.stringify(res));
        res as UserModel;
        this.savePersonManager(res);


      });
  }



  savePersonManager(res) {
    console.log('jestem w save ' + JSON.stringify(res));
    // const userEmail = this.registryForm.controls['email'].value;
    // this.res.email = userEmail
    this.http.post('http://localhost:8080/worker/savemanager', res ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(response => {
        this.saveManager(response);
      });
  }

  saveManager(res) {

    console.log('jestem w saveManager ' + JSON.stringify(res));

    this.http.post('http://localhost:8080/worker/manager', (res) ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(res => console.log(res));
  }

  sendConsultant(){
    const data = JSON.stringify(this.registryForm.value);


    console.log(data);
    this.http.post('http://localhost:8080/worker/new', JSON.parse(data) ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(res => {

        console.log('res w send' + JSON.stringify(res));
        res as UserModel;
        this.savePersonConsultant(res);


      });
  }



  savePersonConsultant(res) {
    console.log('jestem w save ' + JSON.stringify(res));
    // const userEmail = this.registryForm.controls['email'].value;
    // this.res.email = userEmail
    this.http.post('http://localhost:8080/worker/saveconsultant', res ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(response => {
        this.saveConsultant(response);
      });
  }
  saveConsultant(res) {

    console.log('jestem w saveManager ' + JSON.stringify(res));

    this.http.post('http://localhost:8080/worker/consultant', (res) ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    // this.createemailForm();

  }
  constructor( private http: HttpClient) {

  }
}

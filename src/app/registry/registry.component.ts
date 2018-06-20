import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../user/user.model';
import {send} from 'q';
import {Jsonp} from "@angular/http";
import {ClientModel} from "../model/client.model";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
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
    //this.email = new FormControl('' , Validators.required);
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


  send() {
    const data = JSON.stringify(this.registryForm.value);


    console.log(data);
    this.http.post('http://localhost:8080/person/new', JSON.parse(data) ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(res => {

        console.log('res w send' + JSON.stringify(res));
        res as UserModel;
        this.save(res);


      });
  }


  save(res) {
      console.log('jestem w save ' + JSON.stringify(res));
   // const userEmail = this.registryForm.controls['email'].value;
    // this.res.email = userEmail
    this.http.post('http://localhost:8080/person/save', res ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
      .subscribe(response => {
        response as ClientModel;
        this.saveClient(response);
      });
  }




  saveClient(res) {

    console.log('jestem w saveclient ' + JSON.stringify(res));

    this.http.post('http://localhost:8080/person/client', (res) ,
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

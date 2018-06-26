import { Component, OnInit } from '@angular/core';
import {OfferModel} from '../model/offer.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-createoffer',
  templateUrl: './createoffer.component.html',
  styleUrls: ['./createoffer.component.css']
})
export class CreateofferComponent implements OnInit {



  offerForm: FormGroup;
  name: FormControl;
  bankTransferPrice: FormControl;
  accountManagmentPrice: FormControl;
  cardPrice: FormControl;
  stateOfOffer: FormControl;

  createFormControls(){

    this.name = new FormControl('', Validators.required);
    this.bankTransferPrice = new FormControl('', Validators.required);
    this.accountManagmentPrice = new FormControl('', Validators.required);
    this.cardPrice = new FormControl('', Validators.required);
    this.stateOfOffer = new FormControl('', Validators.required);

  }
  createForm() {
    this.offerForm = new FormGroup({
      name: new FormControl(),
      bankTransferPrice: new FormControl(),
      accountManagmentPrice: new FormControl(),
      cardPrice: new FormControl(),
      stateOfOffer: new FormControl()
    });
  }

  send() {
    const data = JSON.stringify(this.offerForm.value);
    const data2 = JSON.parse(data);
    console.log(data);
    console.log(data2);
    this.http.post('http://localhost:8080/offer/new', JSON.parse(data) ,
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
  .subscribe(res => {
    console.log(res);
});
}


  ngOnInit(){
    this.createForm();
    this.createFormControls();

  }
  constructor( private http: HttpClient) {

  }
}

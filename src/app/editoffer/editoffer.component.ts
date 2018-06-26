import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {OfferModel} from '../model/offer.model';
import {OfferService} from './offer.service';
import {MatTableDataSource} from '@angular/material';
import {register} from 'ts-node';
import {assertComponentType} from '@angular/core/src/render3/assert';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.component.html',
  styleUrls: ['./editoffer.component.css']

})
export class EditofferComponent implements OnInit {
  offers: OfferModel[];
  offer: OfferModel;
  offerForm: FormGroup;
  idBankAccountOffer: FormControl;
  name: FormControl;
  bankTransferPrice: FormControl;
  accountManagementPrice: FormControl;
  cardPrice: FormControl;
  stateOfOffer: FormControl;
  displayedColumns = ['idBankAccountOffer', 'name', 'bankTransferPrice', 'accountManagementPrice', 'cardPrice', 'stateOfOffer'];
  dataSource;

  createFormControls() {
    this.idBankAccountOffer = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.bankTransferPrice = new FormControl('', Validators.required);
    this.accountManagementPrice = new FormControl('', Validators.required);
    this.cardPrice = new FormControl('', Validators.required);
    this.stateOfOffer = new FormControl('', Validators.required);

  }

  createForm() {
    this.offerForm = new FormGroup({
      idBankAccountOffer: new FormControl(),
      name: new FormControl(),
      bankTransferPrice: new FormControl(),
      accountManagementPrice: new FormControl(),
      cardPrice: new FormControl(),
      stateOfOffer: new FormControl()
    });
  }

  send() {
    const data = JSON.stringify(this.offerForm.value);
    const data2 = JSON.parse(data);
    data2 as OfferModel;

    console.log(data);
    console.log('jako offer model ' + JSON.stringify(data2));
    this.http.post('http://localhost:8080/offer/changeOffer', JSON.parse(data),
      {
        headers: {'Content-Type': 'application/json'},
        responseType: 'json'
      })
      .subscribe(res => {
        console.log(res);
      });
  }

  // loadOffer(idOffer) {
  //   this.http.get('http://localhost:8080/offer/find/' + idOffer, {
  //     headers: {'Content-Type': 'application/json'},
  //     responseType: 'json'
  //   })
  //     .subscribe(res => {
  //
  //         this.offers = res as OfferModel;
  //         console.log('Oferty');
  //         console.log(JSON.stringify(this.offers));
  //
  //         this.offerForm.patchValue({
  //           idBankAccountOffer: this.offers.idBankAccountOffer,
  //         });
  //         this.offerForm.patchValue({
  //           name: this.offers.name,
  //
  //         });
  //         console.log(this.offerForm.value);
  //         console.log(this.offerForm.controls['name'].value);
  //        //this.dataSource = new MatTableDataSource<OfferModel>(this.offers);
  //       },
  //       error => {
  //       });
  // }




  load() {
    this.http.get('http://localhost:8080/offer/1', {
      headers: {'Content-Type': 'application/json'},
      responseType: 'json'
    })
      .subscribe(res => {


          this.offers = res as OfferModel[];
          const ob = res as OfferModel[];
          console.log('Oferty');
          console.log(JSON.stringify(this.offers));
          this.dataSource = new MatTableDataSource<OfferModel>(this.offers);
        },
        error => {
        });
   }

  onClick(ide, nameOfOffer, banktransfer, accountmng, cardprice , stateoffer) {



    console.log(this.offers);

    this.offerForm.patchValue({
      idBankAccountOffer: ide,
      name: nameOfOffer,
      bankTransferPrice: banktransfer,
      accountManagementPrice: accountmng,
      cardPrice: cardprice,
      stateOfOffer: stateoffer
    });





    }
  ngOnInit() {
    this.createForm();
    this.createFormControls();
    this.offers = this.offerService.offers;
    this.offer = this.offers[0];
    this.offerService.getOfferList();



  }

  constructor(private http: HttpClient, private offerService: OfferService) {

  }
}

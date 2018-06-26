

import {Injectable} from '@angular/core';
import {OfferModel} from '../model/offer.model';
import {HttpClient} from '@angular/common/http';
import {StatusMessage} from '../model/status-message.model';
import {reject} from 'q';
import {StatusEnum} from "../model/enum/status.enum";

@Injectable()
export class OfferService {


  offers: OfferModel[];
  constructor(private http: HttpClient) {}

  public getOfferList() {
    let status: StatusMessage = new StatusMessage();
    const promise = new Promise((resolve, reject) => {
      this.http.get(  'http://localhost:8080/offer/1', {headers: {'Content-Type': 'application/json'}, responseType: 'json'})
        .subscribe(res => {
            status.status=StatusEnum.OK;
            status.message = "Offer loaded";
          this.offers = res as OfferModel[] ;
          console.log('Oferty');
          console.log(this.offers);
          resolve();
        },
          error => {
            reject();
          });

  });
    return promise;
    }
  }


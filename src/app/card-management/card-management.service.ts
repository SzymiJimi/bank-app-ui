import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {JsonMessageModel} from '../model/json-message.model';
import {CardInformationService} from './card-information/card-information.service';

@Injectable()
export class CardManagementService {

  constructor( private http: HttpClient, private cardInfoService: CardInformationService){

  }
  public changeCardPin(pin: string){
    var promise = new Promise((resolve, reject) => {
      let oldPin:string=this.cardInfoService.userCards[0].pinCode;
      this.cardInfoService.userCards[0].pinCode=pin;
      this.http.post(environment.endpointBase + 'card/changePin', JSON.stringify(this.cardInfoService.userCards[0]), {
        headers: {'Content-Type': 'application/json'},
        responseType: 'json'
      })
        .subscribe(res => {
            // message = res as string;
            resolve();
          },
          error => {
            this.cardInfoService.userCards[0].pinCode=oldPin;
            reject();
          });
    });
    return promise;
  }

}

import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {JsonMessageModel} from '../model/json-message.model';
import {CardInformationService} from './card-information/card-information.service';
import {AddressModel} from '../model/address.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class CardManagementService {

  constructor( private http: HttpClient, private cardInfoService: CardInformationService, private authService: AuthService){

  }
  public changeCardPin(pin: string){
    var promise = new Promise((resolve, reject) => {
      let oldPin:string=this.cardInfoService.userCards[0].pinCode;
      this.cardInfoService.userCards[0].pinCode=pin;
      this.http.post(environment.endpointBase + 'card/changeCard', JSON.stringify(this.cardInfoService.userCards[0]), {
        headers: {'Content-Type': 'application/json'},
        responseType: 'json'
      })
        .subscribe(res => {

            resolve();
          },
          error => {
            this.cardInfoService.userCards[0].pinCode=oldPin;
            reject();
          });
    });
    return promise;
  }

  public blockCard(status: string){
    var promise = new Promise((resolve, reject) => {
      let oldState:string=this.cardInfoService.userCards[0].state;
      this.cardInfoService.userCards[0].state=status;
      this.http.post(environment.endpointBase + 'card/changeCard', JSON.stringify(this.cardInfoService.userCards[0]), {
        headers: {'Content-Type': 'application/json'},
        responseType: 'json'
      })
        .subscribe(res => {
            // message = res as string;
          console.log("Zmieniło status");
            resolve();
          },
          error => {
            this.cardInfoService.userCards[0].state=oldState;
            console.log("nie zmieniło status");

            reject();
          });
    });
    return promise;
  }


  public changeLimits(limit: number){
    var promise = new Promise((resolve, reject) => {
      let oldLimit:number=this.cardInfoService.userCards[0].dayLimit;
      this.cardInfoService.userCards[0].dayLimit=limit;
      this.http.post(environment.endpointBase + 'card/changeCard', JSON.stringify(this.cardInfoService.userCards[0]), {
        headers: {'Content-Type': 'application/json'},
        responseType: 'json'
      })
        .subscribe(res => {
            // message = res as string;
            console.log("Zmieniło status");
            resolve();
          },
          error => {
            this.cardInfoService.userCards[0].dayLimit=oldLimit;
            console.log("nie zmieniło status");

            reject();
          });
    });
    return promise;
  }


  public changeClientAddress(address: AddressModel){
    var promise = new Promise((resolve, reject) => {
      let oldAddress:AddressModel=this.authService.loggedUser.idPerson.idAddress;
      this.authService.loggedUser.idPerson.idAddress= address;
      // this.cardInfoService.userCards[0].dayLimit=limit;
      this.http.post(environment.endpointBase + 'address/changeAddress', JSON.stringify(address), {
        headers: {'Content-Type': 'application/json'},
        responseType: 'json'
      })
        .subscribe(res => {
            // message = res as string;
            console.log("Zmieniło status");
            resolve();
          },
          error => {
            this.authService.loggedUser.idPerson.idAddress= oldAddress;
            console.log("nie zmieniło status");

            reject();
          });
    });
    return promise;
  }

}

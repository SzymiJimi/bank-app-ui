import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {StatusEnum} from '../../model/enum/status.enum';
import {HttpClient} from '@angular/common/http';
import {StatusMessage} from '../../model/status-message.model';
import {CardModel} from '../card.model';
import {CreditCardModel} from '../../model/credit-card.model';


@Injectable()
export class CardInformationService{


  constructor(private http: HttpClient){
  }

  userCards: CreditCardModel[];

  public getCardInformation(idUser: number){
    let status: StatusMessage = new StatusMessage();
    this.http.get(environment.endpointBase +'card/'+idUser,{headers:{'Content-Type': 'application/json'}, responseType:'json'})
      .subscribe(res => {
          status.status=StatusEnum.OK;
          status.message = "Credit card data loaded succesfully";
          this.userCards= res as CreditCardModel[];
          console.log(this.userCards);
        },
        error => {
          status.status=StatusEnum.ERROR;
          status.message= "Error with credit card data loading";
          console.log(status.message);
        });
  }

}

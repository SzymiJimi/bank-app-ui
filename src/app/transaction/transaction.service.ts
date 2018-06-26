import {Injectable} from '@angular/core';
import {BankTransferModel} from '../model/bank-transfer.model';
import {StatusMessage} from '../model/status-message.model';
import {UserModel} from '../user/user.model';
import {environment} from '../../environments/environment';
import {StatusEnum} from '../model/enum/status.enum';
import {HttpClient} from '@angular/common/http';
import {CardInformationService} from '../card-management/card-information/card-information.service';
import {BankAccountService} from '../history/bank-account.service';

@Injectable()
export class TransactionService {

  constructor(private http: HttpClient){
  }

  status: StatusMessage;

  public makeTransaction(bankTransferInfo: BankTransferModel){

    let code: string;
    let status: StatusMessage = new StatusMessage();
    let amount:number;

    bankTransferInfo.amount = parseFloat(bankTransferInfo.amount.toString());
    console.log("Jestem w make transaction");
    var promise = new Promise((resolve, reject) =>{
    this.http.post(environment.endpointBase +'transfer/make',JSON.stringify(bankTransferInfo),{headers:{'Content-Type': 'application/json'}, responseType:'text'})
      .subscribe(res => {
          status.status=StatusEnum.OK;
          status.message = "Zalogowano pomyslnie";
          code= res as string;
          console.log("Kod autentykacyjny:");
          console.log(code);
          resolve(code);
        },
        error => {
          status.status=StatusEnum.ERROR;
          status.message= "Niepoprawne dane logowania";
          console.log("Odrzuciło wtf");
          reject();
        });
    } );
    return promise;
  }


  public registerTransaction(bankTransferInfo: BankTransferModel){

    let message: string;
    bankTransferInfo.amount = parseFloat(bankTransferInfo.amount.toString());
    var promise = new Promise((resolve, reject) => {
      this.http.post(environment.endpointBase + 'transfer/register', JSON.stringify(bankTransferInfo), {
        headers: {'Content-Type': 'application/json'},
        responseType: 'text'
      })
        .subscribe(res => {
            message = res as string;
            resolve();
          },
          error => {
            reject();
          });
    });
      return promise;
  }

}

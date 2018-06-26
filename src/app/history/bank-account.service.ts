import {Injectable} from '@angular/core';
import {BankAccountModel} from '../model/bank-account.model';
import {StatusEnum} from '../model/enum/status.enum';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {StatusMessage} from '../model/status-message.model';
import {reject, resolve} from 'q';


@Injectable()
export class BankAccountService {

  bankAccounts:BankAccountModel[];

  bankAccount: BankAccountModel;
  transferHistory:BankTransferModel[];

  constructor(private http: HttpClient){
  }


  public getAccountList(idUser) {

    let status: StatusMessage = new StatusMessage();
    var promise = new Promise((resolve, reject) =>{
      this.http.get(environment.endpointBase +'bankAccount/'+idUser,{headers:{'Content-Type': 'application/json'}, responseType:'json'})
        .subscribe(res => {
            status.status=StatusEnum.OK;
            status.message = "Bank account loaded succesfully";
            this.bankAccounts= res as BankAccountModel[] ;
            this.bankAccount = this.bankAccounts[0];
            resolve();
          },
          error => {
            status.status=StatusEnum.ERROR;
            status.message= "Error with bank account data loading";
            console.log(status.message);
            reject();
          });
    } );

    return promise;


}

public getHistoryAccount()
{
  var promise = new Promise((resolve, reject) =>{
    this.http.get(environment.endpointBase +'bankAccount/history/'+this.bankAccounts[0].idBankAccount,{headers:{'Content-Type': 'application/json'}, responseType:'json'})
      .subscribe(res => {
          this.transferHistory= res as BankTransferModel[] ;
          resolve();
        },
        error => {
          reject();
        });
  } );

  return promise;
}




}

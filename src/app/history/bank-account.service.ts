import {Injectable} from '@angular/core';
import {BankAccountModel} from '../model/bank-account.model';
import {StatusEnum} from '../model/enum/status.enum';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {StatusMessage} from '../model/status-message.model';

@Injectable()
export class BankAccountService {

  bankAccounts:BankAccountModel[];

  constructor(private http: HttpClient){
  }


  public getAccountList(idUser) {

    let status: StatusMessage = new StatusMessage();
      this.http.get(environment.endpointBase +'bankAccount/'+idUser,{headers:{'Content-Type': 'application/json'}, responseType:'json'})
        .subscribe(res => {
            status.status=StatusEnum.OK;
            status.message = "Bank account loaded succesfully";
            this.bankAccounts= res as BankAccountModel[] ;
            console.log("Konto bankowe");
            console.log(this.bankAccounts);
          },
          error => {
            status.status=StatusEnum.ERROR;
            status.message= "Error with bank account data loading";
            console.log(status.message);
          });


}



}

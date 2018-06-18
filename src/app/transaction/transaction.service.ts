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

    console.log(amount);
    bankTransferInfo.amount = parseFloat(bankTransferInfo.amount.toString());
    console.log(bankTransferInfo);
    // bankTransferInfo.dateOfExecution=null;
    // bankTransferInfo.amount=null;
    // bankTransferInfo.toAccount=null;
    // bankTransferInfo.fromAccount=null;
    // bankTransferInfo.idBankTransfer=1;
    // bankTransferInfo.amountStateBefore=null;
    // bankTransferInfo.dateOfExecution=null;
    // bankTransferInfo.dateOfExecution=null;
    this.http.post(environment.endpointBase +'transfer/make',JSON.stringify(bankTransferInfo),{headers:{'Content-Type': 'application/json'}, responseType:'text'})
      .subscribe(res => {
          status.status=StatusEnum.OK;
          status.message = "Zalogowano pomyslnie";
          code= res;
          console.log(code);
        },
        error => {
          status.status=StatusEnum.ERROR;
          status.message= "Niepoprawne dane logowania";
        });
    return code;

  }

}

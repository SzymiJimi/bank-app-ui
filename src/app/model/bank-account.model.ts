import {Serializable} from './serializable.model';
import {ClientModel} from './client.model';

export class BankAccountModel extends Serializable{

  idBankAccount:number;
  accountNumber:string;
  amount:number;
  idBankAccountOffer:number;
  creationDate:string;
  dayLimit:number;
  monthLimit:number;
  idClient:ClientModel;
  // idConsultant:number;
}

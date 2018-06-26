import {Serializable} from './serializable.model';
import {ClientModel} from './client.model';
import {BankAccountModel} from './bank-account.model';

export class CreditCardModel  extends Serializable{
  idCreditCard:number;
  name:string;
  creditCardNumber:string;
  pinCode:string;
  state:string;
  expirationDate;
  type:string;
  dayLimit:number;
  monthLimit:number;
  idBankAccount: BankAccountModel;
}

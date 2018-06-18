import {Serializable} from './serializable.model';
import {AccountTransferModel} from './account-transfer.model';
import {BankAccountModel} from './bank-account.model';


export class BankTransferModel extends Serializable{
  idBankTransfer:number;
  dateOfOrder:string;
  recipient:string;
  address:string;
  description:string;
  state:string;
  amount:number;
  amountStateBefore:number;
  dateOfExecution:string;
  type:string;
  toAccount: AccountTransferModel;
  fromAccount: BankAccountModel;

}

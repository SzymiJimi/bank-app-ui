import {Serializable} from './serializable.model';
import {BankAccountModel} from './bank-account.model';
import {ExternalAccountModel} from './external-account.model';

export class AccountTransferModel extends Serializable{

  recipientAccount:string;
  idInternalAccount:BankAccountModel;
  idExternalAccount:ExternalAccountModel;
}

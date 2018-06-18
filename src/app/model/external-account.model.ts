import {Serializable} from './serializable.model';

export class ExternalAccountModel extends Serializable{

  idExternalAccount:number;
  accountNumber:string;

  constructor( idExternalAccount: number, accountNumber:string){
    super();
    this.accountNumber=accountNumber;
    this.idExternalAccount= idExternalAccount;
  }

}

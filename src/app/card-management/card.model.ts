import {UserModel} from '../user/user.model';


  export class CardModel {
  type: string;
  number: string;
  expirationDate: string;
  owner: UserModel;
  status: string;
  dailyWithdrawalLimit: string;
  dailyOperationLimit: string;
  dailyInternetOperationsLimit: string;
  founds: string;

}

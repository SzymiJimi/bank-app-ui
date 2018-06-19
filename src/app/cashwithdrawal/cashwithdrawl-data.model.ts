import {UserModel} from '../user/user.model';

export class CashwithdrawlDataModel {
  ownerUserData: UserModel = new UserModel();
  bankAccountNr: string;
  avaibleFounds: string;
}

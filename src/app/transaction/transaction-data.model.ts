import {FormControl, FormGroup} from '@angular/forms';
import {UserModel} from '../user/user.model';

export class TransactionDataModel {
  ownerUserData: UserModel= new UserModel();
  bankAccountNr: string;
  avaibleFounds: string;
  transactionDate: number;
  name: string;
  accountNr: string;
  address: string;
  title: string;
  amount: string;
}

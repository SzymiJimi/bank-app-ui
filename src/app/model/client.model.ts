import {Serializable} from './serializable.model';
import {UserModel} from '../user/user.model';

export class ClientModel  extends Serializable{

  idClient:number;
  user: UserModel;

}

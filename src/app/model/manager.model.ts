import {Serializable} from './serializable.model';
import {UserModel} from '../user/user.model';


export class ManagerModel extends Serializable{

  idManager: number;
  salary: number;
  idUser: UserModel;
}

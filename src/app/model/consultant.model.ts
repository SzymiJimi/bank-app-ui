import {Serializable} from './serializable.model';
import {UserModel} from '../user/user.model';

export class ConsultantModel extends Serializable{
  idConsultant: number;
  salary: number;
  position: String;
  idUser: UserModel;
}

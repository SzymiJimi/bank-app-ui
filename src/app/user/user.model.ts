import {Serializable} from '../model/serializable.model';
import {PersonModel} from '../model/person.model';

export class UserModel extends Serializable{

   idUser: number;
   username: string;
   password: string;
   email: string;
   registerDate: string;
   idRole: number;
   idPerson: PersonModel;



}

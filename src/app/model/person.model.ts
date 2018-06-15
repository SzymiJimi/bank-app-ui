import {Serializable} from './serializable.model';

export class PersonModel  extends Serializable{

  idPerson: number;
  name:string;
  surname:string;
  peselNumber:string;
  idCardNumber:string;
  citizenship:string;
  mothersName:string;
  fathersName:string;
  telepohoneNumber:string;
  mothersMaidenName:string;
  // idAddress: number;
  // idAddressForCorrespondence: number;

}

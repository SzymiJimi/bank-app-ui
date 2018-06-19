import {Serializable} from './serializable.model';

export class AddressModel extends Serializable{
  idAdress:number;
  city:string;
  street:string;
  numberOfTheBuilding:string;
  apartmentNumber:string;
  postCode:string;
  postCity:string;
}

import {Serializable} from './serializable.model';

export class OfferModel extends Serializable {

  idBankAccountOffer: number;
  name: string;
  bankTransferPrice: number;
  accountManagmentPrice: number;
  cardPrice: number;
  stateOfOffer: string;
  idManager: number;
}

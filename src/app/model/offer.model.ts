import {Serializable} from './serializable.model';

export class OfferModel extends Serializable {

  idBankAccountOffer: number;
  name: string;
  bankTransferPrice: number;
  accountManagementPrice: number;
  cardPrice: number;
  stateOfOffer: string;
  idManager: number;
}

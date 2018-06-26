import {Serializable} from './serializable.model';

export class IncomeModel  extends Serializable{


  idIncome:number;
  sourceOfIncome:string;
  netIncome:string;
  currencyOfIncome:string;
  numberOfDependents:string;
  formOfEmployment:string;
  liabilitiesAndExpenses:number;
  monthlyFees:string;
  monthlyBenefits:string;
  monthlyInstalmentsInOtherInstitutions:string;

}

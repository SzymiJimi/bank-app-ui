
export class InvestmentModel {

  id: number;
  name: string;
  startDate: string;
  installmentToGo: string;
  installmentAmount: string;
  payDay: string;

  constructor(id, name, startDate, installmentToGo, installmentAmount, payDay){
    this.id=id;
    this.name=name;
    this.startDate= startDate;
    this.installmentToGo= installmentToGo;
    this.installmentAmount = installmentAmount;
    this.payDay= payDay;
  }


}

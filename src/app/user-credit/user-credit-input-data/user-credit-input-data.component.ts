import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {IncomeModel} from '../../model/income.model';

@Component({
  selector: 'app-user-credit-input-data',
  templateUrl: './user-credit-input-data.component.html',
  styleUrls: ['./user-credit-input-data.component.css']
})
export class UserCreditInputDataComponent implements OnInit {

  constructor() { }



  sameAddress=true;
  addressData: FormGroup;

  street: FormControl;
  houseNumber: FormControl;
  apartmentNumber: FormControl;
  postalCode: FormControl;
  city: FormControl;
  nation: FormControl;



  creditUserData: FormGroup;

  numberOfDependents: FormControl;
  education = ['Wyższe', 'Średnie', 'Podstawowe', 'Doktor', 'Licencjat'];
  selectedEducation;

  maritalStatuses= ['Żonaty', 'Wolny', 'Zamężna', 'Wdowa/wdowiec'];
  selectedMaritalStatus;


  incomeFormData: FormGroup;

  monthlyIncome: FormControl;
  incomeCurrencies = ['EUR', 'PLN', 'USD', 'GBR'];
  selectedIncomeCurrency;

  incomeSources= ['Umowa o pracę', 'Prowadzenie własnej działalności gospodarczej', 'Prowadzenie spółki'];
  selectedIncomeSource;


  monthlyPaymentsForm: FormGroup;

  monthlyHouseholdPayments: FormControl;
  monthlyMaintenancePayments: FormControl;
  monthlyLoansLiabilities: FormControl;


  createFormControls(){

    this.numberOfDependents= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,2}") ]);
    this.monthlyIncome= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{3,10}")]);
    this.monthlyHouseholdPayments= new FormControl('',[Validators.required, Validators.pattern("^[0-9]{2,10}")]);
    this.monthlyMaintenancePayments= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2,10}")]);
    this.monthlyLoansLiabilities= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2,10}")]);
    this.street= new FormControl('', Validators.required);
    this.houseNumber= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,4}")]);
    this.apartmentNumber= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,4}")]);
    this.postalCode= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}-[0-9]{3}")]);
    this.city= new FormControl('', Validators.required);
    this.nation= new FormControl('', Validators.required);
  }


  getErrorMessage(value: FormControl) {
    console.log("Wywołuje się");
    return value.hasError('required') ? 'To pole nie może być puste' :
      value.hasError('email') ? 'Wpisałeś email nieprawidłowo' :
        value.hasError('pattern') ? 'Pole uzupełnione nieprawidłowo' :
        '';
  }

  createForm(){

    this.addressData = new FormGroup({
      street: this.street,
      houseNumber: this.houseNumber,
      apartmentNumber: this.apartmentNumber,
      postalCode: this.postalCode,
      city: this.city,
      nation: this.nation
    });

    this.creditUserData = new FormGroup({
      numberOfDependents: this.numberOfDependents,

    });

    this.incomeFormData= new FormGroup( {
      monthlyIncome: this.monthlyIncome,

    });

    this.monthlyPaymentsForm = new FormGroup({
      monthlyHouseholdPayments: this.monthlyHouseholdPayments,
      monthlyMaintenancePayments: this.monthlyMaintenancePayments,
      monthlyLoansLiabilities: this.monthlyLoansLiabilities
    });
  }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  sendData() {
    let incomeData: IncomeModel;
    incomeData.sourceOfIncome = this.selectedIncomeSource;
    incomeData.netIncome = this.monthlyIncome.value;
    incomeData.currencyOfIncome = this.selectedIncomeCurrency;
    incomeData.numberOfDependents = this.numberOfDependents.value;
    incomeData.formOfEmployment = this.selectedIncomeSource;
    incomeData.liabilitiesAndExpenses = this.monthlyLoansLiabilities.value;
    incomeData.monthlyFees = this.monthlyHouseholdPayments.value;
    incomeData.monthlyBenefits = (this.monthlyIncome.value-this.monthlyHouseholdPayments.value).toString();
    incomeData.monthlyInstalmentsInOtherInstitutions = this.monthlyMaintenancePayments.value;



  }
}

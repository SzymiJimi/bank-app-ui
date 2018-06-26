import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

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
  education: FormControl;
  maritalStatus: FormControl;


  incomeFormData: FormGroup;

  monthlyIncome: FormControl;
  incomeCurrency: FormControl;
  incomeSource: FormControl;


  monthlyPaymentsForm: FormGroup;

  monthlyHouseholdPayments: FormControl;
  monthlyMaintenancePayments: FormControl;
  monthlyLoansLiabilities: FormControl;


  createFormControls(){

    this.numberOfDependents= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}") ]);
    // this.education= new FormControl('', [Validators.required,  Validators.pattern("^[0-9]{6}")]);
    // this.maritalStatus= new FormControl('', Validators.required);
    this.monthlyIncome= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}")]);
    // this.incomeCurrency= new FormControl('', Validators.required);
    // this.incomeSource= new FormControl('', Validators.required);
    this.monthlyHouseholdPayments= new FormControl('',[Validators.required, Validators.pattern("^[0-9]{6}")]);
    this.monthlyMaintenancePayments= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}")]);
    this.monthlyLoansLiabilities= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}")]);
    this.street= new FormControl('', Validators.required);
    this.houseNumber= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{4}")]);
    this.apartmentNumber= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{4}")]);
    this.postalCode= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}-[0-9]{3}")]);
    this.city= new FormControl('', Validators.required);
    this.nation= new FormControl('', Validators.required);
    // this.education= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{26}")]);
    // this.address= new FormControl('', Validators.required);
    // this.title= new FormControl('', Validators.required);
    // this.amount= new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,8},[0-9]{2}")]);
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
      // education: this.education,
      // maritalStatus: this.maritalStatus
    });

    this.incomeFormData= new FormGroup( {
      monthlyIncome: this.monthlyIncome,
      // incomeCurrency: this.incomeCurrency,
      // incomeSource: this.incomeSource
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
}

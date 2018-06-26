import {Component, ElementRef, OnInit, Renderer2, Inject} from '@angular/core';
import {MatDialog, MatGridList} from '@angular/material';
import {UserModel} from '../../user/user.model';
import {CardModel} from '../card.model';
import {ChangePinComponent} from '../dialog/change-pin/change-pin.component';
import * as $AB from 'jquery';
import * as bootstrap from 'bootstrap';
import {BlockCardComponent} from '../dialog/block-card/block-card.component';
import {CancelCardComponent} from '../dialog/cancel-card/cancel-card.component';
import {ChangeLimitsComponent} from '../dialog/change-limits/change-limits.component';
import {ChangeAddressComponent} from '../dialog/change-address/change-address.component';
import {PersonModel} from '../../model/person.model';
import {CreditCardModel} from '../../model/credit-card.model';
import {BankAccountModel} from '../../model/bank-account.model';
import {CardInformationService} from './card-information.service';
import {BankAccountService} from '../../history/bank-account.service';
import {AuthService} from '../../auth/auth.service';


@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {

  tmpVal : any = 3;

   // $ : any;


  constructor(public dialog: MatDialog,
              elem: ElementRef,
              renderer: Renderer2,
              private cardService: CardInformationService,
              private accountService: BankAccountService,
              private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.creditCard= this.cardService.userCards[0];
    console.log(this.creditCard);
    this.accountData = this.accountService.bankAccounts[0];
    this.ownerUserData= this.authService.loggedUser;

  }

  ownerUserData: UserModel=new UserModel();
  creditCard: CreditCardModel = new CreditCardModel();
  accountData: BankAccountModel;


  address: string;
  title: string;
  messaage: string;
  // animal: string;
  pin: string;

  openDialog(): void {
    let dialogRef = this.dialog.open(ChangePinComponent, {
      width: '500px',
      data: { name: this.pin }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed, pin: ');
      this.pin = result;
    });
  }

  openBlockDialog(): void {
    let dialogRef = this.dialog.open(BlockCardComponent, {
      width: '500px',
      data: { cardNumber: this.creditCard.creditCardNumber, cardOwner: this.ownerUserData.idPerson.name+" "+this.ownerUserData.idPerson.surname, cardName: this.creditCard.type}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.pin = result;
    });
  }

  openCancelDialog(): void {
    let dialogRef = this.dialog.open(CancelCardComponent, {
      width: '500px',
      data: {
        cardNumber: this.creditCard.creditCardNumber,
        cardOwner: this.ownerUserData.idPerson.name+" "+this.ownerUserData.idPerson.surname,
        cardName: this.creditCard.type,
        expirationDate: this.creditCard.expirationDate,
        status: this.creditCard.state }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


  openChangeLimitsDialog(): void {
    let dialogRef = this.dialog.open(ChangeLimitsComponent, {
      width: '500px',
      data: { name: this.pin }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.creditCard.dayLimit = result.dailyWithdrawalLimit;
      this.creditCard.dayLimit = result.dailyOperationLimit;
      this.creditCard.dayLimit = result.dailyInternetOperationsLimit;
    });
  }


  openChangeAsdressDialog(): void {
    let dialogRef = this.dialog.open(ChangeAddressComponent, {
      width: '500px',
      data: {
        owner: this.ownerUserData.idPerson.name+ " " + this.ownerUserData.idPerson.surname,
        address: this.address,
        email: this.ownerUserData.email
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.address = result.city+ " "+ result.houseNr+", "+ result.postalCode+" "+result.city;
      this.ownerUserData.email=result.email;
      this.creditCard.dayLimit = result.dailyInternetOperationsLimit;
    });


  }




  openModal(){
    (<any>$("#exampleModal")).modal("show");
    // $('#exampleModal');
  }


  dialogMessage() {
    let dialogRef = this.dialog.open(ChangePinComponent, {
      width: '350px',
      height: '250px',
      position: {top: '0%', left: '40%'},
      data: {title: this.title, message: this.messaage}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.messaage = result;
    });

  }

    createOrChangePin(){
      this.title="Zmiana lub utworzenie PINu";
      this.messaage="Zmień ten pin";

      this.dialogMessage();

    }


  }

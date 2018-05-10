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


@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {

  tmpVal : any = 3;

   // $ : any;


  constructor(public dialog: MatDialog, elem: ElementRef, renderer: Renderer2) {
    this.tmpVal=this.tmpVal+'px';
    this.ownerUserData.name='Szymon';
    this.ownerUserData.surname='Jarząbek';
  }

  ngOnInit() {

    this.ownerUserData.name='Szymon';
    this.ownerUserData.surname='Jarząbek';
    this.ownerUserData.email='rekas1@tlen.pl';
    this.ownerUserData.bankAccountNr= "07 1020 2629 0000 9202 0321 1018";


    this.cardData.number= '3423 1234 3456 8767';
    this.cardData.expirationDate= '03/22' ;
    this.cardData.owner= this.ownerUserData;
    this.cardData.status = 'Aktywna';
    this.cardData.dailyWithdrawalLimit= '500.00';
    this.cardData.dailyOperationLimit= '500.00';
    this.cardData.dailyInternetOperationsLimit= '500.00';
    this.cardData.founds='784.24zł' ;
    this.cardData.type = 'mastercard'.toUpperCase();
    this.address= 'Szczechowice 22, 34-534 Szczechów'

  }

  ownerUserData: UserModel=new UserModel();
  cardData: CardModel= new CardModel();
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
      console.log('The dialog was closed');
      this.pin = result;
    });
  }

  openBlockDialog(): void {
    let dialogRef = this.dialog.open(BlockCardComponent, {
      width: '500px',
      data: { cardNumber: this.cardData.number, cardOwner: this.cardData.owner.name+" "+this.cardData.owner.surname, cardName: this.cardData.type}
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
        cardNumber: this.cardData.number,
        cardOwner: this.cardData.owner.name+" "+this.cardData.owner.surname,
        cardName: this.cardData.type,
        expirationDate: this.cardData.expirationDate,
        status: this.cardData.status }
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
      this.cardData.dailyWithdrawalLimit = result.dailyWithdrawalLimit;
      this.cardData.dailyOperationLimit = result.dailyOperationLimit;
      this.cardData.dailyInternetOperationsLimit = result.dailyInternetOperationsLimit;
    });
  }


  openChangeAsdressDialog(): void {
    let dialogRef = this.dialog.open(ChangeAddressComponent, {
      width: '500px',
      data: {
        owner: this.ownerUserData.name+ " " + this.ownerUserData.surname,
        address: this.address,
        email: this.ownerUserData.email
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.address = result.city+ " "+ result.houseNr+", "+ result.postalCode+" "+result.city;
      this.ownerUserData.email=result.email;
      this.cardData.dailyInternetOperationsLimit = result.dailyInternetOperationsLimit;
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

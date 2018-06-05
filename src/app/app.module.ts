import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import { SummaryComponent } from './transaction/summary/summary.component';
import { InputDataComponent } from './transaction/input-data/input-data.component';
import { FinalMessageComponent } from './transaction/final-message/final-message.component';
import { HistoryComponent } from './history/history.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSelectModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatGridListModule,
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatSidenavModule,
  MatRadioModule,
  MatListModule,
  MatIconModule,
  MatHorizontalStepper,
  MatStepperModule,
  MatSliderModule,
  MatSlideToggleModule, GestureConfig, MatCheckboxModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardManagementComponent } from './card-management/card-management.component';
import { CardInformationComponent } from './card-management/card-information/card-information.component';
import { DialogComponent } from './card-management/dialog/dialog.component';
import { ChangePinComponent } from './card-management/dialog/change-pin/change-pin.component';
import { BlockCardComponent } from './card-management/dialog/block-card/block-card.component';
import { CancelCardComponent } from './card-management/dialog/cancel-card/cancel-card.component';
import { ChangeLimitsComponent } from './card-management/dialog/change-limits/change-limits.component';
import { ChangeAddressComponent } from './card-management/dialog/change-address/change-address.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { ManagerStatsComponent } from './manager/manager-stats/manager-stats.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {NavbarComponent} from './navbar/navbar.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { CounselornavbarComponent } from './counselornavbar/counselornavbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { FindclientComponent } from './findclient/findclient.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserCreditsComponent } from './user/user-credits/user-credits.component';
import { UserManageAccountComponent } from './user/user-manage-account/user-manage-account.component';
import {AppRouterModule} from './app.router.module';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginhistoryComponent } from './loginhistory/loginhistory.component';
import { CashwithdrawalComponent } from './cashwithdrawal/cashwithdrawal.component';
import { SummarycashwithdrawalComponent } from './cashwithdrawal/summarycashwithdrawal/summarycashwithdrawal.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PernamentOrderComponent } from './transaction/input-data/pernament-order/pernament-order.component';
import { UserCreditComponent } from './user-credit/user-credit.component';
import {InstallmentValuePipe} from './user-credit/installment-value.pipe';
import { UserCreditInputDataComponent } from './user-credit/user-credit-input-data/user-credit-input-data.component';
import { UserCreditFinishScreenComponent } from './user-credit/user-credit-finish-screen/user-credit-finish-screen.component';
import {CreditDataService} from './user-credit/credit-data.service';
import { InvestmentsComponent } from './investments/investments.component';
import { NewInvestmentComponent } from './investments/new-investment/new-investment.component';


@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
  itemsPerPageLabel = 'Wierszy na stronę';
  nextPageLabel = 'Następna strona';
  previousPageLabel = 'Poprzednia strona';
  firstPageLabel = 'Pierwsza strona';
  lastPageLabel = 'Ostatnia strona';

  getRangeLabel = function(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return `0 z ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} z ${length}`;
  };
}

@NgModule({
  declarations: [
    InstallmentValuePipe,
    AppComponent,
    TransactionComponent,
    UserComponent,
    SummaryComponent,
    InputDataComponent,
    FinalMessageComponent,
    HistoryComponent,
    CardManagementComponent,
    CardInformationComponent,
    DialogComponent,
    ChangePinComponent,
    BlockCardComponent,
    NavbarComponent,
    NavbarUserComponent,
    CounselornavbarComponent,
    HomepageComponent,
    LoginComponent,
    RegistryComponent,
    FindclientComponent,
    UserPageComponent,
    CancelCardComponent,
    ChangeLimitsComponent,
    ChangeAddressComponent,
    ManagerComponent,
    ManagerHomeComponent,
    ManagerStatsComponent,
    UserCreditsComponent,
    UserManageAccountComponent,
    FavoriteComponent,
    LoginhistoryComponent,
    CashwithdrawalComponent,
    CreateaccountComponent
    PernamentOrderComponent,
    UserCreditComponent,
    UserCreditInputDataComponent,
    UserCreditFinishScreenComponent,
    InvestmentsComponent,
    NewInvestmentComponent,

  ],
  imports: [
    ChartsModule,
    BrowserModule,
    CdkTableModule,
    MatTableModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatStepperModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [{
        path: 'history',
        component: HistoryComponent
      },
        {
          path: 'transaction',
          component: TransactionComponent
        },
        {
          path: 'card',
          component: CardManagementComponent
        },
        {
          path: 'card/changepin',
          component: ChangePinComponent
        },
        {
          path: 'card/blockcard',
          component: BlockCardComponent
        },
        {
          path: '',
          component: HomepageComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },

        {
          path: 'signIn',
          component: RegistryComponent
        },
        {
          path: 'findClient',
          component: FindclientComponent
        },
        {
          path: 'user',
          component: UserPageComponent
        },
        {
          path: 'favorite',
          component: FavoriteComponent
        },
        {
          path: 'loginhistory',
          component: LoginhistoryComponent
        },
        {
          path: 'cashwithdrawl',
          component: CashwithdrawalComponent
        },
        {
          path: 'registry',
          component: RegistryComponent
        }


      ]
    ),


  ],
  exports: [
    MatSelectModule,
    CdkTableModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  entryComponents: [
    CancelCardComponent,
    ChangeLimitsComponent,
    ChangeAddressComponent,
  ]
  ,
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomPaginator},
    {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    {provide: CreditDataService, useClass: CreditDataService}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

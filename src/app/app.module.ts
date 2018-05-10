import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule} from '@angular/core';
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
  MatInputModule, MatNativeDateModule, MatGridListModule, MatDialogModule, MatButtonModule, MatCardModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardManagementComponent } from './card-management/card-management.component';
import { CardInformationComponent } from './card-management/card-information/card-information.component';
import { DialogComponent } from './card-management/dialog/dialog.component';
import { ChangePinComponent } from './card-management/dialog/change-pin/change-pin.component';
import { BlockCardComponent } from './card-management/dialog/block-card/block-card.component';

import {NavbarComponent} from './navbar/navbar.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { CounselornavbarComponent } from './counselornavbar/counselornavbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { FindclientComponent } from './findclient/findclient.component';
import { UserPageComponent } from './user-page/user-page.component';

@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
  itemsPerPageLabel = 'Wierszy na stronę';
  nextPageLabel='Następna strona';
  previousPageLabel='Poprzednia strona';
  firstPageLabel='Pierwsza strona';
  lastPageLabel='Ostatnia strona';

  getRangeLabel= function(page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return `0 z ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} z ${length}`;
  }
}

@NgModule({
  declarations: [
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


  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatTableModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
          path: "",
          component: HomepageComponent
        },
        {
          path: "login",
          component: LoginComponent
        },

        {
          path: "signIn",
          component: RegistryComponent
        },
        {
          path: "findClient",
          component: FindclientComponent
        },
        {
          path: "user",
          component: UserPageComponent
        },
        

      ]
    )

  ],
  exports:[
    MatSelectModule,
    CdkTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [{provide: MatPaginatorIntl, useClass: CustomPaginator}],
  bootstrap: [AppComponent]
})
export class AppModule { }

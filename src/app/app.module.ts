import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule} from '@angular/core';

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
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardManagementComponent } from './card-management/card-management.component';
import { CardInformationComponent } from './card-management/card-information/card-information.component';
import { DialogComponent } from './card-management/dialog/dialog.component';
import { ChangePinComponent } from './card-management/dialog/change-pin/change-pin.component';
import { BlockCardComponent } from './card-management/dialog/block-card/block-card.component';


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
    MatInputModule,
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
        }]
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

import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';


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
import {MatTableModule, MatPaginatorModule, MatPaginatorIntl, MatSelectModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatTableModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
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
        }]
    )

  ],
  exports:[
    MatSelectModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [{provide: MatPaginatorIntl, useClass: CustomPaginator}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {CardManagementComponent} from './card-management/card-management.component';
import {FindclientComponent} from './findclient/findclient.component';
import {ManagerStatsComponent} from './manager/manager-stats/manager-stats.component';
import {BlockCardComponent} from './card-management/dialog/block-card/block-card.component';
import {HistoryComponent} from './history/history.component';
import {TransactionComponent} from './transaction/transaction.component';
import {UserCreditsComponent} from './user/user-credits/user-credits.component';
import {ManagerHomeComponent} from './manager/manager-home/manager-home.component';
import {UserManageAccountComponent} from './user/user-manage-account/user-manage-account.component';
import {LoginComponent} from './auth/login/login.component';
import {ChangePinComponent} from './card-management/dialog/change-pin/change-pin.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RegistryComponent} from './registry/registry.component';
import {UserPageComponent} from './user-page/user-page.component';
import {UserCreditComponent} from './user-credit/user-credit.component';
import {InvestmentsComponent} from './investments/investments.component';
import {NewInvestmentComponent} from './investments/new-investment/new-investment.component';
import { NavbarConsultantComponent } from './navbar-consultant/navbar-consultant.component';
import { CashComponent } from './cash/cash.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AddPersonEndComponent } from './add-person-end/add-person-end.component';
import { ChangeDataComponent } from './change-data/change-data.component';
import { ChangeDataEndComponent } from './change-data-end/change-data-end.component';

const appRoutes: Routes =
  [{
    path: 'user/history',
    component: HistoryComponent
  },
    {
      path: 'user/transaction',
      component: TransactionComponent
    },
    {
      path: 'user/card',
      component: CardManagementComponent
    },
    {
      path: 'user/credits',
      component: UserCreditsComponent
    },
    {
      path: 'user/card/changepin',
      component: ChangePinComponent
    },
    {
      path: 'user/card/blockcard',
      component: BlockCardComponent
    },
    {
      path: 'user/credit/new',
      component: UserCreditComponent
    },
    {
      path: 'user/accountManage',
      component: UserManageAccountComponent
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
      path: 'signIn',
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
    {
      path: 'manager/home',
      component: ManagerHomeComponent
    },
    {
      path: 'manager/stats',
      component: ManagerStatsComponent
    },
    {
      path: 'user/investment',
      component: InvestmentsComponent
    },
    {
      path: 'user/investment/new',
      component: NewInvestmentComponent
    },
    {
      path: 'consultant/cash',
      component: CashComponent
    },
    {
      path: 'consultant/withdraw',
      component: WithdrawComponent
    },
    {
    path: 'consultant/addperson',
    component: AddPersonComponent
    },

    {
    path: 'consultant/addpersonend',
    component: AddPersonEndComponent
    },
    {
     path: 'consultant/changedata',
    component: ChangeDataComponent
    },

    {
     path: 'consultant/changedataend',
    component: ChangeDataEndComponent 
    },

    




   
    
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(
    appRoutes
    )
  ],
  exports: [RouterModule]

})
export class AppRouterModule { }

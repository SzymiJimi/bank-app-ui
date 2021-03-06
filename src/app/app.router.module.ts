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
import {CreateofferComponent} from "./createoffer/createoffer.component";


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
    {

      path: 'manager',
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
      path: 'manager/offer/new',
      component: CreateofferComponent
    },
    {
      path: 'manager/sing-up',
      component: RegistryComponent
    },
    {
      path: 'manager/offer',
      component: CreateofferComponent
    }
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

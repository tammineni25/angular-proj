import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { LoanSuccessComponent } from './loan/loan.success.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: 'home', component: HomeComponent},
  { path: 'loan', component: LoanComponent},
  { path: 'loan-success', component: LoanSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LeadsComponent } from '../leads/leads.component';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [
  { path: '', component: PaymentsComponent },
  { path: 'leads', component: LeadsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }

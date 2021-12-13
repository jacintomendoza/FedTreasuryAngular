import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
import { FedTreasuryComponent } from './fed-treasury/fed-treasury.component';

const routes: Routes = [
  {path: "fedTreasury", component: FedTreasuryComponent} // fedTreasury might need to be goldReserves?
  // {path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

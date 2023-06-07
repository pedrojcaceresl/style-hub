import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApointmentsPageComponent } from './pages/apointments-page/apointments-page.component';

const routes: Routes = [
  {
    path: '',
    component: ApointmentsPageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApointmentsRoutingModule { }

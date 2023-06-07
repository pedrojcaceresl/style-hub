import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApointmentsRoutingModule } from './apointments-routing.module';
import { ApointmentsPageComponent } from './pages/apointments-page/apointments-page.component';


@NgModule({
  declarations: [
    ApointmentsPageComponent
  ],
  imports: [
    CommonModule,
    ApointmentsRoutingModule
  ]
})
export class ApointmentsModule { }

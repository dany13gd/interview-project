import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { PricesComponent } from './prices/prices.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { InsurancesComponent } from './insurances/insurances.component';
import { ContactComponent } from './contact/contact.component';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { ReserveComponent } from './reserve/reserve.component';

@NgModule({
  declarations: [
    HomeComponent,
    PricesComponent,
    BenefitsComponent,
    InsurancesComponent,
    ContactComponent,
    ReserveComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
  ],
})
export class PagesModule {}

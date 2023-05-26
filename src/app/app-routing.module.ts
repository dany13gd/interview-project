import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { InsurancesComponent } from './pages/insurances/insurances.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'insurances', component: InsurancesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

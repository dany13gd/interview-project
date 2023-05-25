import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { PricesComponent } from './prices/prices.component';

@NgModule({
  declarations: [HomeComponent, PricesComponent],
  imports: [CommonModule, RouterModule, SharedModule, MatIconModule],
  exports: [HomeComponent],
})
export class PagesModule {}

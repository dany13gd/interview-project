import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MastheadComponent } from './components/masthead/masthead.component';

@NgModule({
  declarations: [HeaderComponent, MastheadComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class SharedModule {}

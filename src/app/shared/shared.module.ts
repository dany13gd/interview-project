import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MastheadComponent } from './components/masthead/masthead.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentImageComponent } from './components/content-image/content-image.component';
import { PhoneComponent } from './components/phone/phone.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MastheadComponent,
    FooterComponent,
    ContentImageComponent,
    PhoneComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MastheadComponent,
    ContentImageComponent,
    PhoneComponent,
  ],
})
export class SharedModule {}

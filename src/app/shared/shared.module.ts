import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MastheadComponent } from './components/masthead/masthead.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentImageComponent } from './components/content-image/content-image.component';
import { PhoneComponent } from './components/phone/phone.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  calendar3,
  geoAltFill,
  watch,
  NgxBootstrapIconsModule,
  starFill,
  chevronLeft,
  chevronRight,
  chevronDown,
  chevronUp,
  list,
} from 'ngx-bootstrap-icons';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ContactEmailComponent } from './components/contact-email/contact-email.component';
const icons = {
  geoAltFill,
  calendar3,
  watch,
  starFill,
  chevronLeft,
  chevronRight,
  chevronDown,
  chevronUp,
  list,
};

@NgModule({
  declarations: [
    HeaderComponent,
    MastheadComponent,
    FooterComponent,
    ContentImageComponent,
    PhoneComponent,
    SocialLinksComponent,
    SearchFormComponent,
    AccordionComponent,
    ContactEmailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgxBootstrapIconsModule.pick(icons),
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MastheadComponent,
    ContentImageComponent,
    PhoneComponent,
    SocialLinksComponent,
    SearchFormComponent,
    AccordionComponent,
    ContactEmailComponent,
  ],
})
export class SharedModule {}

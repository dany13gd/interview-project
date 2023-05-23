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
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MastheadComponent,
    ContentImageComponent,
    PhoneComponent,
    SocialLinksComponent,
  ],
})
export class SharedModule {}

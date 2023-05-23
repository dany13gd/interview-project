import { Component, Input } from '@angular/core';
import { SocialNetwork } from '../../models/social-networks';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  @Input() inverted = false;
  public list: SocialNetwork[] = [
    {
      label: 'facebook',
      alternativeText: 'facebook icon',
      icon: 'facebook',
      url: 'https://www.facebook.com/dany.guerrerodelgado/',
    },
    {
      label: 'linkedin',
      alternativeText: 'linkedin icon',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-guerrero-13-web',
    },
  ];
}

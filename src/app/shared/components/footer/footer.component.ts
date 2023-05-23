import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public logoImage: string =
    'https://touraislande.com/wp-content/uploads/2019/09/TouraEuro-Logo-e1501914199940-blanc.png';
  public menuItems: any[] = [
    {
      title: 'Nos Prix',
      path: '/nos-prix',
    },
    {
      title: 'Avantages',
      path: '/avantages',
    },
    {
      title: 'Assurances',
      path: '/assurances',
    },
    {
      title: 'Blog',
      path: '/',
    },
    {
      title: 'FAQ',
      path: '/',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Conditions Générales',
      path: '/conditions-generales',
    },
  ];
}

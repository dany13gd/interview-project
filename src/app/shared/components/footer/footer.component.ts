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
      title: 'Prices',
      path: '/prices',
    },
    {
      title: 'Benefits',
      path: '/benefits',
    },
    {
      title: 'Insurance',
      path: '/insurances',
    },

    {
      title: 'Contact',
      path: '/contact',
    },
  ];
}

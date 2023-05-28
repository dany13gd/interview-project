import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public logo: string = '../../../../assets/images/Logo-interview.png';
  public btnUrl: string = '/devis';
  public btnLabel: string = 'Demandez un Devis';
  public openMenu = false;
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
    {
      title: 'Reserve',
      path: '/reserve',
    },
  ];
  public toggleNav(): void {
    this.openMenu = !this.openMenu;
  }
}

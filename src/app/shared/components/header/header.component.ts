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
      title: 'Avis Clients',
      path: '/avis',
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
  public toggleNav(): void {
    this.openMenu = !this.openMenu;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent {
  public link: string = '/reserve';
  public buttonText: string = 'book online';
  public bgImage: string = '../../../assets/images/masthead-benefits.webp';
  public mhTitle: string = 'Benefits';
  public title: string = 'Rent your car in Cancun with confidence!';
  public intro: string =
    'Thanks to its seriousness and experience, TouraCancun now has a large clientele and a network renowned for its reliability. TouraCancun has thus acquired credibility which makes it the French-speaking company specializing in car rental in Mexico.';
  public gridIcons: any[] = [
    {
      title: 'Price without surprises',
      content:
        'Renting a car on the internet is the jungle. TouraCancun provides you with a full price and no surprises upon your arrival.',
      path: '../../../assets/images/Price-without-surprises.webp',
    },
    {
      title: 'Insurance included',
      content:
        'We are the only ones to include all the insurances and to give you the final prices and not calls for tenders.',
      path: '../../../assets/images/insurance-included.webp',
    },
    {
      title: 'Zero deductible for all rentals',
      content:
        'This insurance eliminates all liability of the vehicle and the driver in the event of an accident or theft. Also eliminates any payment from the driver. With TouraCancun you are 100% insured. The Must of insurance!',
      path: '../../../assets/images/zero-deductible.webp',
    },
    {
      title: 'Anti-corruption insurance',
      content:
        'Specific insurance where the tourist in distress can call one of our operators 24/24, who will speak to the police and thanks to our contacts with the local authorities, will help you to leave without inconvenience.',
      path: '../../../assets/images/anti-corruption.webp',
    },
    {
      title: 'French-speaking support',
      content:
        'The best responsiveness on the market. 24/7 support WhatsApp – Phone – Chat – Email. Responsiveness and unique support in Mexico.',
      path: '../../../assets/images/24hrs-support.webp',
    },
    {
      title: 'Unlimited mileage',
      content:
        'Pour votre prochain road-trip au Mexique,  profitez du kilométrage illimité offert sur votre location de voiture pour aller encore plus loin avec TouraCancun.',
      path: '../../../assets/images/unlimited.webp',
    },
    {
      title: 'Rental without credit card',
      content:
        'With TouraCancun no need to communicate your credit card number. Rent directly online on our site.',
      path: '../../../assets/images/without-credit-card.webp',
    },
    {
      title: '2nd driver free',
      content:
        'Always more savings with TouraCancun. We are the only ones in Mexico to offer our customers this service.',
      path: '../../../assets/images/2nd-driver-free.png',
    },
  ];
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  public mhImage: string = '../../../assets/images/home-masthead.jpg';
  public link: string = '/benefits';
  public buttonText: string = 'book online';
  public title: string = 'Car rental agency in Mexico: TouraCancun';
  public content: string =
    'Planning a trip to Mexico? If you want to make the most of your stay in Cancun and its surroundings, renting a vehicle is practically a must. This way, you can move easily from one site to another, at your own pace. To allow you to live an unforgettable experience in Mexico, TouraCancun offers you a car rental service that will avoid unpleasant surprises and give you peace of mind.';
  public content2: string =
    'To allow you to live an unforgettable experience in Mexico, TouraCancun offers you a car rental service that will avoid unpleasant surprises and give you peace of mind.';
  public firstSectionTitle: string =
    'A large selection of rental cars to discover Mexico in complete freedom';
  public firstContent1: string =
    'TouraCancun offers you a wide choice of vehicle models, so you can base your choice on your priorities (fuel economy, cargo space, etc.) or the roads you will be driving.';
  public firstContent2: string =
    'Know that no matter which car, all-terrain vehicle or minivan you opt for, its mechanical condition will always be impeccable, guaranteeing you safe and hassle-free travel.';
  public firstUrl: string = '../../../assets/images/volkswagen-gol.webp';
  public Height: string = '257';
  public Width: string = '313';
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
        'For your next road trip in Mexico, take advantage of the unlimited mileage offered on your car rental to go even further with TouraCancun.',
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

  public gotoVechicleList(): void {
    this.router.navigate(['/car-list']);
  }
}

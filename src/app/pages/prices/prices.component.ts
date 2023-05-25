import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      '► What price for car rental in Cancun? 🚗 | TouraCancun ✈'
    );
  }
  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'description',
        content: `TouraCancun - car rental in Cancun with transparent and all-inclusive prices. Avoid unpleasant surprises by comparing our detailed quotes.`,
      },
      {
        name: 'keywords',
        content: 'What price for car rental in Cancun?',
      },
    ]);
  }

  public bgImage: string = '../../../assets/images/masthead-prices.webp';
  public mastHeadTitle: string = 'Prices';
  public link: string = '/devis';
  public buttonText: string = 'Réserver en ligne';
  public mainTitle: string =
    'Learn How to Compare Your Quote and Avoid the Pitfalls';
  public subtitle: string =
    'Price difference between the promised by the competition and the price on site';
  public intro: string =
    'With TouraCancun there are no bad surprises! Everything is included and detailed in our offers. Nothing more to pay when picking up your vehicle.';
  public content: string =
    '*Beware of overly attractive offers on the net, which are getting better and better, which reserve you very bad surprises on arrival, or deprive you of any recourse. TouraCancun is used to helping avoid the most beautiful pitfalls. And thus saves many travelers who are too optimistic about THE good deal.';

  public table: any[] = [
    {
      days15: 'Average cost',
      lessorComparator: '$ 268.00 USD',
      toura: '$ 430.00 USD',
    },
    {
      days15: 'All Taxes',
      lessorComparator: 'Surprise on the spot',
      toura: 'Included',
    },
    {
      days15: 'Zero Deductible',
      lessorComparator: '$ 15 USD / day',
      toura: 'Included',
    },
    {
      days15: 'Extension to Third Parties',
      lessorComparator: '$ 15 USD/ day',
      toura: 'Included',
    },
    {
      days15: 'Windows/Tyres',
      lessorComparator: '$ 6 USD/ day',
      toura: 'Included',
    },
    {
      days15: 'Passenger Insurance',
      lessorComparator: '$ 3 USD / day',
      toura: 'Included',
    },
    {
      days15: 'Underbody',
      lessorComparator: '$ 4 USD / day',
      toura: 'Included',
    },
    {
      days15: 'Under Car',
      lessorComparator: 'Not available',
      toura: 'Included',
    },
    {
      days15: 'Vehicle roof insurance',
      lessorComparator: 'Not available',
      toura: 'Included',
    },
    {
      days15: 'Final Price',
      lessorComparator: '$ 870.00 USD',
      toura: '$ 430.00 USD',
    },
    {
      days15: 'More Benefits',
      lessorComparator: 'Lessor / Comparator X*',
      toura: 'TouraCancun',
    },
    {
      days15: 'Young Driver',
      lessorComparator: '$ 5 USD / day',
      toura: 'Free',
    },
    {
      days15: 'Additional Driver',
      lessorComparator: '$ 5 USD / day',
      toura: 'Free',
    },
    {
      days15: 'French support 24 hours a day',
      lessorComparator: 'Not available',
      toura: 'Included',
    },
    {
      days15: 'Anti-Corruption Support',
      lessorComparator: 'Not available',
      toura: 'Included',
    },
    {
      days15: 'Legal Aid in French',
      lessorComparator: 'Not available',
      toura: 'Included',
    },
    {
      days15: 'Belize border crossing',
      lessorComparator: 'Not available',
      toura: 'Included',
    },
    {
      days15: 'Reservation',
      lessorComparator: 'With C.B and deposit',
      toura: 'Without C.B and without deposit',
    },
    {
      days15: 'Payment',
      lessorComparator: 'Immediate (trapped)',
      toura: 'The Day of the Taking (Freedom)',
    },
  ];
}

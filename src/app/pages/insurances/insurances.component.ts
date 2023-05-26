import { Component } from '@angular/core';
import { AccordionItem } from 'src/app/shared/models/accordion-item';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.scss'],
})
export class InsurancesComponent {
  public content: string = '* Insurance taken care of directly by TouraCancun.';
  public bgImage: string = '../../../assets/images/masthead-insurances.webp';
  public mhTitle: string = 'Insurances';
  public subtitle: string = 'Insurance included in our prices';
  public intro: string =
    'For 2022/23 we again have the best insurance package in Mexico, with the addition of the anti-corruption assistance (unique). All you have to do is look at all our advantages in detail to confirm that our services are the best on the market. See also our Insured Clients.';
  public url: string = '../../../assets/images/insuraces-image.jpg';
  public width: string = '890';
  public height: string = '915';
  public accordionData: AccordionItem[] = [
    {
      title: 'Collision(CDW)',
      content:
        'Reduces liability for damage to the rented vehicle (CDW -Collision Damage Waivers).',
      closed: false,
    },
    {
      title: 'Zero deductible (EPC)',
      content:
        'The Zero Deductible (EPC) complements the Collision (CDW): nothing to pay! This insurance eliminates all liability of the vehicle and the driver in the event of an accident or theft. Also eliminates any payment from the driver. The Must of insurance!',
      closed: true,
    },
    {
      title: 'Vehicle theft (TP)',
      content:
        'This insurance covers you against the partial or complete theft of your vehicle.',
      closed: true,
    },
    {
      title: 'Third party insurance (PLI)',
      content:
        'This insurance covers civil liability for damage inflicted by the rented car on third parties or its property. It covers up to 750,000 Mexican pesos.',
      closed: true,
    },
    {
      title: 'Third Party Liability Supplement (SLI)',
      content:
        'In addition to the PLI, this coverage is an extension and complement of the civil liability insurance, which covers up to 3 million Mexican pesos for damages inflicted on third parties. If necessary, legal assistance is included. It is really a very important insurance. Comparators never include.',
      closed: true,
    },
    {
      title: 'Protection & medical expenses for occupants (PAI)',
      content:
        "With this insurance the customer's medical expenses will be covered in the event of an accident with the rented car. Only the costs of authorized passengers will be covered.",
      closed: true,
    },
  ];
}

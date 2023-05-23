import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  public mhImage: string =
    'https://toura-croatie-cms-asset-upload.s3.eu-west-3.amazonaws.com/location_voiture_croatie_6f01f248ec.jpg';
  public link: string = '/devis';
  public buttonText: string = 'Réserver en ligne';
  public title: string =
    'Agence de location de voiture au Mexique : TouraCancun ';
  public content: string =
    "Vous planifiez un voyage au Mexique? Si vous souhaitez tirer le meilleur de votre séjour à Cancun et ses environs, si vous souhaitez louer un véhicule est pratiquement un incontournable. Ainsi, vous pourrez vous déplacer aisément d'un site à un autre, à votre rythme. Pour vous permettre de vivre une expérience inoubliable au Mexique, TouraCancun vous propose un service de location de voiture qui vous évitera les mauvaises surprises et vous procurera la paix d'esprit.";
  public content2: string =
    "Pour vous permettre de vivre une expérience inoubliable au Mexique, TouraCancun vous propose un service de location de voiture qui vous évitera les mauvaises surprises et vous procurera la paix d'esprit.";
  public firstSectionTitle: string =
    'Un grand choix de voitures de location pour découvrir le Mexique en toute liberté';
  public firstContent1: string =
    'TouraCancun vous propose un large choix de modèles de véhicules, afin que vous puissiez baser votre choix en fonction de vos priorités (économie de carburant, espace cargo, etc.) ou des routes que vous arpenterez.';
  public firstContent2: string =
    'Sachez que peu importe la voiture, véhicule tout-terrain ou fourgonnette pour lequel vous opterez, sa condition mécanique sera toujours impeccable, vous garantissant des déplacements sécuritaires et sans tracas.';
  public firstUrl: string =
    'https://touracancun.com/wp-content/uploads/2019/09/volkswagen-gol.jpg';
  public firstHeight: string = '257';
  public firstWidth: string = '313';
  public gridIcons: any[] = [
    {
      title: 'Prix sans surprises',
      content:
        'Louer sa voiture sur internet c’est la jungle. TouraCancun vous fournit un prix complet et sans surprises à votre arrivée.',
      path: 'https://touracancun.com/wp-content/uploads/2019/09/devis-sans-surprises-1.png',
    },
    {
      title: 'Assurances incluses',
      content:
        'Nous sommes les seuls à inclure toutes les assurances et à vous donner les tarifs définitifs et non des appels d’offre.',
      path: 'https://touracancun.com/wp-content/uploads/2019/09/assurances-incluses-1.png',
    },
    {
      title: 'Zéro franchise pour toutes les locations',
      content:
        'Cette assurance élimine toute la responsabilité du véhicule et du conducteur en cas d’accident ou de vol. Élimine aussi tout paiement de la part du conducteur. Avec TouraCancun vous êtes assuré à 100%. Le Must des assurances !  ',
      path: 'https://touracancun.com/wp-content/uploads/2019/09/sero-franchise.png',
    },
    {
      title: 'Assurance anticorruption',
      content:
        'Assurance spécifique où le touriste en détresse pourra appeler un de nos opérateurs 24/24, qui parlera à la police et grâce à nos contacts avec les autorités locales, vous aidera à repartir sans inconvénients.',
      path: 'https://touracancun.com/wp-content/uploads/2019/09/passage-frontiere-1.png',
    },
    {
      title: 'Assistance francophone',
      content:
        'La meilleure réactivité du marché. Assistance 24h/24h WhatsApp – Téléphone – Chat – Email. Réactivité et support unique au Mexique.',
      path: 'https://touracancun.com/wp-content/uploads/2019/09/assistance-francophone-1.png',
    },
    {
      title: 'Kilométrage illimité',
      content:
        'Pour votre prochain road-trip au Mexique,  profitez du kilométrage illimité offert sur votre location de voiture pour aller encore plus loin avec TouraCancun.',
      path: 'https://touracancun.com/wp-content/uploads/2019/11/km-illimite-1.png',
    },
    {
      title: 'Location sans carte bancaire',
      content:
        'Avec TouraCancun aucun besoin de communiquer votre numéro de CB. Louez directement en ligne sur notre site.',
      path: 'https://touracancun.com/wp-content/uploads/2019/09/location-sans-carte-1.png',
    },
    {
      title: '2ème conducteur gratuit',
      content:
        'Toujours plus d’économies avec TouraCancun. Nous sommes les seuls au Mexique à offrir à nos clients cette prestation.',
      path: 'https://touracancun.com/wp-content/uploads/2019/12/2019-11-26.png',
    },
  ];

  public gotoVechicleList(): void {
    this.router.navigate(['/vehicules']);
  }
}

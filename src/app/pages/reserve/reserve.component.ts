import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';
import { Car } from 'src/app/shared/models/car';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss'],
})
export class ReserveComponent implements OnInit {
  constructor(private utils: UtilsService) {}

  public dataSearch = {
    pickUpLocation: 0,
    pickUpDate: '',
    pickUpTime: '',
    dropLocation: 0,
    dropDate: '',
    dropTime: '',
  };
  public carList: Car[] = [];

  ngOnInit(): void {
    this.dataSearch = this.utils.storageGet('searchParams');
    if (this.dataSearch) {
      this.loadCarlist();
    } else {
      this.carList = [];
    }
  }
  public loadCarlist(): void {
    this.carList = [
      {
        ModelName: 'Fiat 500 1.0 BSG',
        CarTransmissionType: 'Manual ',
        CarModelImageURL:
          'https://apprac.oryx-rent.hr/en/api/fileItem/65?hash=EB642620323501532F414CE43B9DDCF15EAF44C6D2DD6EE0A392B868CF20A5C90CD8A7EDF37A2C420DD3B28E0740056A0B83320E157CBF873B55EA1F57B4E88F',
        Amount: 208.34,
        DaysForPayment: 7,
        PassengerCapacity: '4',
        SmallBagsCapacity: 1,
        BigBagsCapacity: 1,
      },
      {
        ModelName: 'Fiat 500 1.0 BSG',
        CarTransmissionType: 'Manual ',
        CarModelImageURL:
          'https://apprac.oryx-rent.hr/en/api/fileItem/65?hash=EB642620323501532F414CE43B9DDCF15EAF44C6D2DD6EE0A392B868CF20A5C90CD8A7EDF37A2C420DD3B28E0740056A0B83320E157CBF873B55EA1F57B4E88F',
        Amount: 208.34,
        DaysForPayment: 7,
        PassengerCapacity: '4',
        SmallBagsCapacity: 1,
        BigBagsCapacity: 1,
      },
      {
        ModelName: 'Fiat 500 1.0 BSG',
        CarTransmissionType: 'Manual ',
        CarModelImageURL:
          'https://apprac.oryx-rent.hr/en/api/fileItem/65?hash=EB642620323501532F414CE43B9DDCF15EAF44C6D2DD6EE0A392B868CF20A5C90CD8A7EDF37A2C420DD3B28E0740056A0B83320E157CBF873B55EA1F57B4E88F',
        Amount: 208.34,
        DaysForPayment: 7,
        PassengerCapacity: '4',
        SmallBagsCapacity: 1,
        BigBagsCapacity: 1,
      },
      {
        ModelName: 'Opel Corsa ',
        CarTransmissionType: 'Manual ',
        CarModelImageURL:
          'https://apprac.oryx-rent.hr/en/api/fileItem/68?hash=B6A14F0F365683CCB5A9407E7DBF1B3695FC187AA40E629BA6BD60ACFB12D3AF457BE6B947E89D689FEA3E25418BF8DF147CE418722428C1D32FDA7D93945E51',
        Amount: 275.46,
        DaysForPayment: 7,
        PassengerCapacity: '5',
        SmallBagsCapacity: 1,
        BigBagsCapacity: 1,
      },
      {
        ModelName: 'Opel Corsa ',
        CarTransmissionType: 'Manual ',
        CarModelImageURL:
          'https://apprac.oryx-rent.hr/en/api/fileItem/68?hash=B6A14F0F365683CCB5A9407E7DBF1B3695FC187AA40E629BA6BD60ACFB12D3AF457BE6B947E89D689FEA3E25418BF8DF147CE418722428C1D32FDA7D93945E51',
        Amount: 275.46,
        DaysForPayment: 7,
        PassengerCapacity: '5',
        SmallBagsCapacity: 1,
        BigBagsCapacity: 1,
      },
    ];
  }
}

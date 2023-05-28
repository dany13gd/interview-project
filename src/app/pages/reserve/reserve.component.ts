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

  ngOnInit(): void {
    this.dataSearch = this.utils.storageGet('searchParams');
  }
  public carList: Car[] = [
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
  ];
}

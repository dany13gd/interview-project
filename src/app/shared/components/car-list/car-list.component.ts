import { Component, Input } from '@angular/core';
import { Car } from '../../models/car';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent {
  constructor(private router: Router, private utils: UtilsService) {}

  @Input() list: Car[] = [];

  public selectCar(item: Car): void {
    this.utils.storageSet('selectedCar', item);
    this.router.navigate(['/details']);
  }
}

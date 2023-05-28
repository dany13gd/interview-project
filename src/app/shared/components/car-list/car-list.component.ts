import { Component, Input } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent {
  @Input() list: Car[] = [];

  public selectCar(item: Car): void {
    // this.utils.storageSet('selectedCar', item);
    // this.router.navigate(['/additionnel']);
  }
}

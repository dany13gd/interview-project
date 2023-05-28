import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';
import { Car } from 'src/app/shared/models/car';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private router: Router, private utils: UtilsService) {}
  ngOnInit(): void {
    this.items = this.utils.storageGet('selectedCar');
  }

  @Input() items: any = {};

  public extras: any[] = [
    { checked: false, name: 'Additional driver', amount: '58.45' },
    { checked: false, name: 'Driver age fee (18 - 20)', amount: '25.00' },
    { checked: false, name: 'WiFi', amount: '38.50' },
    { checked: false, name: 'Child seat', amount: ' 83.50' },
    { checked: false, name: 'Booster seat', amount: '70.00' },
    { checked: false, name: 'Baby seat', amount: '83.50' },
    { checked: false, name: 'GPS', amount: '59.50' },
  ];

  public toggleSelectExtra(extra: any): void {
    extra.checked = !extra.checked;
  }
  public goToFinalStep(): void {
    this.router.navigate(['/final-step']);
  }
}

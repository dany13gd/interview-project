import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent {
  @Input() inverted = false;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
}

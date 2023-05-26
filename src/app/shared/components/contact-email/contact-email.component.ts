import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-email',
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.scss'],
})
export class ContactEmailComponent {
  @Input() inverted = false;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
}

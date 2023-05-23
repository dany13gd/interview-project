import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() bgImage = '';
  @Input() hideText = false;
}

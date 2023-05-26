import { Component, Input } from '@angular/core';
import { AccordionItem } from '../../models/accordion-item';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() accordionList: AccordionItem[] = [];
  @Input() displayChevron: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleClose(item: AccordionItem): void {
    if (!this.displayChevron) {
      return;
    }
    item.closed = !item.closed;
  }
}

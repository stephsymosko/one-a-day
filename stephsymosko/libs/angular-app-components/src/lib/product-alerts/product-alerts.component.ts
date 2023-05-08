import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../../apps/angular-app/src/simply-wreaths-products';

@Component({
  selector: 'stephsymosko-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

}
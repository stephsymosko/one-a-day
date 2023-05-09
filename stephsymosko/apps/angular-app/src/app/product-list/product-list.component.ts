import { products } from '@stephsymosko/libs/data-access';
import { Component } from '@angular/core';

@Component({
  selector: 'stephsymosko-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = [...products];

  share() {
    window.alert(`The product has been shared!`);
  }

  onNotify() {
    window.alert(`You will be notified when the product goes on sale`);
  }
}

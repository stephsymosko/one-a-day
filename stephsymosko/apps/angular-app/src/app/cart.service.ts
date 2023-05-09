import { Product } from '@stephsymosko/libs/data-access';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}

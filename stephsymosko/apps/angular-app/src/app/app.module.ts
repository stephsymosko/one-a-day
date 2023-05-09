
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent, TopBarComponent} from '@stephsymosko/libs/angular-app-components';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductAlertsComponent, ProductDetailsComponent, CartComponent, TopBarComponent, ShippingComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

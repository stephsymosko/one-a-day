
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent, TopBarComponent} from '@stephsymosko/libs/angular-app-components';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductAlertsComponent, ProductDetailsComponent, CartComponent, TopBarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

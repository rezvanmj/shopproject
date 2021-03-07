import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Router,RouterModule,Routes} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';


const routes : Routes =[
  {path:"" , component: HomeComponent},
  {path: "product" , component:ProductComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ShoppingBasketComponent,
    ProductOffersComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

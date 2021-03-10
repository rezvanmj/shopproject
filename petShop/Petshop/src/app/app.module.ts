import { ShoppingBasketService } from './shopping-basket.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Router,RouterModule,Routes} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { FormsModule } from '@angular/forms';

const routes : Routes =[
  {path:"" , component: HomeComponent},
  // {path: "product" , component:ProductComponent},
  {path: "product/:id" , component:ProductComponent},
  {path: "shoppingBasket" , component:ShoppingBasketComponent},
  {path:  "signup" , component:SignupComponent},
  {path : "signIn" , component:SignInComponent},
  {path: "favorite" , component:FavoriteProductsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ShoppingBasketComponent,
    ProductOffersComponent,
    SignupComponent,
    SignInComponent,
    FavoriteProductsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    [NgbPaginationModule, NgbAlertModule],
    [CarouselModule.forRoot()],
  ],
  providers: [ShoppingBasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AdminGuard } from './admin.guard';
import { FavoriteService } from './services/favorite.service';
import { GlobalService } from './services/global.service';
import { ShoppingBasketService } from './services/shopping-basket.service';
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
import { SumOfPricesComponent } from './shopping-basket/sum-of-prices/sum-of-prices.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { SearchbarComponent } from './home/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes =[
  {path:"" , component: HomeComponent},
  {path: "admin" , component:AdminComponent , canActivate : [AdminGuard]},
  {path: "user/:id" , component:UserComponent},
  {path: "product/:id" , component:ProductComponent},
  {path: "shoppingBasket" , component:ShoppingBasketComponent},
  {path:  "signup" , component:SignupComponent},
  {path : "signIn" , component:SignInComponent},
  {path: "favorite" , component:FavoriteProductsComponent},
  {path: "editProducts" , component:EditProductsComponent},
];

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
    SumOfPricesComponent,
    AdminComponent,
    UserComponent,
    EditProductsComponent,
    SearchbarComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    [NgbPaginationModule, NgbAlertModule],
    [CarouselModule.forRoot(),
    HttpClientModule],
  ],
  providers: [ShoppingBasketService,GlobalService , FavoriteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

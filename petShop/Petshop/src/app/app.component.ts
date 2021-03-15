import { FavoriteService } from './services/favorite.service';
import { ShoppingBasketService } from './services/shopping-basket.service';
import { GlobalService } from './services/global.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Petshop';

  constructor(private shoppingBasketService:ShoppingBasketService , private FavoriteService : FavoriteService ){
    GlobalService.countingBasketProduct = shoppingBasketService.shoppingProducts.length;
    GlobalService.countingFavoriteProduct = FavoriteService.favoriteProducts.length ;
  }


  get countingFavoriteProduct():number{
    return GlobalService.countingFavoriteProduct;
  }

  get CountingBasketProduct():number {
    return GlobalService.countingBasketProduct;
  }

  get UserLoggedin():boolean {
    return GlobalService.UserLoggedin;
  }

  get AdminLoggedin():boolean {
    return GlobalService.AdminLoggedin;
  }

  logOut(): void{
    GlobalService.AdminLoggedin = false ;
    GlobalService.UserLoggedin = false ;
    alert("خروج از حساب کاربری")
  }


}

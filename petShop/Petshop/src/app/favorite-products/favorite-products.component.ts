import { ShoppingBasketService } from './../services/shopping-basket.service';
import { FavoriteService } from './../services/favorite.service';
import { ShoppingBasketComponent } from './../shopping-basket/shopping-basket.component';
import { GlobalService } from './../services/global.service';
import { IProduct, Ptype } from './../interfaces/products';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss'],

})
export class FavoriteProductsComponent implements OnInit {

  favoriteProduct: IProduct[] = [];

  constructor(private favService: FavoriteService , private basketService : ShoppingBasketService ) {
  this.favoriteProduct = favService.favoriteProducts;
   }

  ngOnInit(): void {
  }



  countingFavoriteProduct:number = this.favoriteProduct.length;


  addToFavorite(product:IProduct):void{
    this.favService.addToFavorite(product);
  }

  addToBasket(product:IProduct):void{
    this.basketService.addToBasket(product);
  }

  removeFromFavortie(product : IProduct){
    console.log(product);
this.favService.removeFromFavortie(product);
  }

}

import { ShoppingBasketService } from './../services/shopping-basket.service';
import { FavoriteService } from './../services/favorite.service';
import { FavoriteProductsComponent } from './../favorite-products/favorite-products.component';
import { IProduct, Ptype } from './../interfaces/products';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {

  shoppingProducts : IProduct[] = [];

  constructor( private favservise :FavoriteService , private basketservice : ShoppingBasketService) {
   this.shoppingProducts = basketservice.shoppingProducts;
   }



  ngOnInit(): void {

    for(var i=0 ; i<this.shoppingProducts.length ; i++){
      this.sum = this.sum + this.shoppingProducts[i].price;
   }

  }

  sum : number = 0 ;


  productCounter(shoppingProduct : IProduct): number  {
    let counter = 0 ;
    for(let i =0 ; i < this.shoppingProducts.length ; i++ ){
      if(this.shoppingProducts[i] === shoppingProduct){
        counter ++ ;
      }
    }
    return counter ;
  }

  updatePrice(){
    this.sum = 0;
    for(var i=0 ; i<this.shoppingProducts.length ; i++){
      this.sum = this.sum + this.shoppingProducts[i].count*this.shoppingProducts[i].price;
   }
  }

  removeFromBasket(product: IProduct){
    this.basketservice.removeFromBasket(product);
    this.updatePrice();
  }

  reduceFromBasket(product: IProduct){
    this.basketservice.reduceFromBasket(product);
    this.updatePrice();
  }

  addToBasket(product : IProduct){
    this.basketservice.addToBasket(product);
    this.updatePrice();
  }

  addToFavorite(product: IProduct){
  this.favservise.addToFavorite(product);
  }

}



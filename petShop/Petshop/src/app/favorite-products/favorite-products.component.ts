import { FavoriteService } from './../favorite.service';
import { IProduct, Ptype } from './../interfaces/products';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss']
})
export class FavoriteProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addToFavorite(product : IProduct ){
    this.favoriteProduct.push(product) ;
    console.log(product + "added to fav");
  }

  removeFromFavortie(product : IProduct){
    const index : number = this.favoriteProduct.indexOf(product);
    if(index != -1){
         this.favoriteProduct.splice(index ,1 );
    }
  }

  favoriteProduct: IProduct[] = FavoriteService.shoppingProducts;

  countingFavoriteProduct:number = this.favoriteProduct.length;


}

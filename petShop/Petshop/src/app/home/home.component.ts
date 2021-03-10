import { ShoppingBasketComponent } from './../shopping-basket/shopping-basket.component';
import { IProduct } from './../interfaces/products';
import { FavoriteProductsComponent } from './../favorite-products/favorite-products.component';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import {Ptype} from '../interfaces/products' ;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  products:IProduct[]= ProductsService.products;

  // productFilter(num: number ){
  //   if(num == 1){
  //     this.products= this.products.filter(product => product.type == Ptype.food );
  //   }
  // }


  favoriteComponent = new FavoriteProductsComponent();
  basketlistComponent = new ShoppingBasketComponent();

  constructor() { }

  ngOnInit(): void {


  }



}

import { FavoriteService } from './../services/favorite.service';
import { FavoriteProductsComponent } from './../favorite-products/favorite-products.component';
import { ProductsService } from '../services/products.service';
import { HomeComponent } from './../home/home.component';
import { IProduct } from './../interfaces/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingBasketComponent } from '../shopping-basket/shopping-basket.component';
import { ShoppingBasketService } from '../services/shopping-basket.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private favService : FavoriteService,private activeRouter : ActivatedRoute  ,private basketService : ShoppingBasketService) { }

  product:IProduct ;

  ngOnInit(): void {
  this.product = ProductsService.products.find(product =>product.id == this.activeRouter.snapshot.params['id']);

  }


  addToFavorite(product:IProduct):void{
    this.favService.addToFavorite(product);
  }

  addToBasket(product:IProduct):void{
    this.basketService.addToBasket(product);
  }

}

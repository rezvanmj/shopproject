import { IProduct, Ptype } from './../interfaces/products';
import { ShoppingBasketService } from './../shopping-basket.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {


  constructor() { }
  sum:number = 0;


  ngOnInit(): void {

    //TODO debug:updating the price counter

     for(var i=0 ; i<this.shoppingProducts.length ; i++){
       this.sum = this.sum + this.shoppingProducts[i].price;
       console.log(this.sum);
    }



  }

  addToBasket(product : IProduct){
    this.shoppingProducts.push(product);
    console.log(product + "added to baskets");
  }

  removeFromBasket(product : IProduct){
    console.log(product );
    const index : number = this.shoppingProducts.indexOf(product);
    if(index != -1){
         this.shoppingProducts.splice(index ,1 );
    }

  }

  updatePrice(){
    for(var i=0 ; i<this.shoppingProducts.length ; i++){
      this.sum = this.sum + this.shoppingProducts[i].price;
      console.log(this.sum);
   }
  }

   shoppingProducts : IProduct[] = ShoppingBasketService.shoppingProducts;
   countingBasketProduct:number = this.shoppingProducts.length;

}

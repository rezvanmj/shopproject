import { ShoppingBasketService } from './../services/shopping-basket.service';
import { FavoriteService } from './../services/favorite.service';
import { ShoppingBasketComponent } from './../shopping-basket/shopping-basket.component';
import { IProduct } from './../interfaces/products';
import { FavoriteProductsComponent } from './../favorite-products/favorite-products.component';
import { ProductsService } from '../services/products.service';
import { Component, OnInit } from '@angular/core';
import {Ptype} from '../interfaces/products' ;
import { UsreService } from '../services/user.service';
import { AdminService } from '../services/admin.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {





  constructor(private favService : FavoriteService , private basketService : ShoppingBasketService , private Productservice : ProductsService,private userService:AdminService) {

   }

  ngOnInit(): void {
    // this.getUserList();

  }
  userlist:any=[];
  products:IProduct[]= ProductsService.products;
  // getUserList(){
  //   this.userService.get().subscribe(res=>{
  //     this.userlist=res;
  //     console.log("🚀 ~ file: home.component.ts ~ line 38 ~ HomeComponent ~ this.userService.get ~ userlist", this.userlist);
  //   },err=>{

  //   })
  // }

  addToBasket(product : IProduct){
   this.basketService.addToBasket(product);
  }

  addToFavorite(product : IProduct){
   this.favService.addToFavorite(product);
  }

  content : IProduct[] ;

  // searchThis(data) {
  //   this.content = this.products
  //   console.log(data)
  //   if (data) {
  //     this.content = this.content.filter(function (product, i, array) {
  //       let arrayelement = product.name.toLowerCase()
  //       return arrayelement.includes(data)
  //     })
  //   }
  //   else {
  //     console.log(this.content)
  //   }
  //   console.log(this.content)
  // }

 filter(filtername:String){
   this.getProductlist();
   if(filtername == "food"){
    this.products=this.products.filter(p=> p.type === Ptype.food );
  }
  if(filtername == "collar"){
    this.products=this.products.filter(p=> p.type === Ptype.collar );
  }
  if(filtername == "scratcher"){
    this.products=this.products.filter(p=> p.type === Ptype.scratcher );
  }
  if(filtername == "bed"){
    this.products=this.products.filter(p=> p.type === Ptype.bed );
  }
  if(filtername == "all"){
    this.getProductlist();
  }


 }


 getProductlist(){
  this.products= ProductsService.products;
 }
}



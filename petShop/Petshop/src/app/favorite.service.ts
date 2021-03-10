import { IProduct, Ptype } from './interfaces/products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  favoriteProduct : IProduct[] ;

  addToFavorite(product : IProduct ){
    this.favoriteProduct.push(product) ;
  }

  removeFromFavortie(product : IProduct){
    const index : number = this.favoriteProduct.indexOf(product);
    if(index != -1){
         this.favoriteProduct.splice(index ,1 );
    }
  }




  static shoppingProducts: IProduct[]=[
    {
      type: Ptype.bed ,
      name: "جای خواب گربه",
    id : 1 ,
    price: 43000,
    image: "../../assets/images/120173296.jpg" ,
    availablity: true ,
    information : "این محصول یک جای خواب نرم و گرم برای دوستان پشمالوشم که از جنس پنبه و خز بسیار لطیف تولید شده است دارای دیواره های بلند و ورودی کوتاه برای ورووج راحتر به همراه پارچه کف ترمزدار تشک جدا شونده و قابل شستشو"
    } ,

    {
      type: Ptype.collar,
      name: "قلاده ی گربه",
      id : 2 ,
      price: 43000,
      image: "../../assets/images/4181.jpg" ,
      availablity: true ,
      information : "این محصول یک جای خواب نرم و گرم برای دوستان پشمالوشم که از جنس پنبه و خز بسیار لطیف تولید شده است دارای دیواره های بلند و ورودی کوتاه برای ورووج راحتر به همراه پارچه کف ترمزدار تشک جدا شونده و قابل شستشو"
    },
    {
      type: Ptype.food,
      name: "غذای خشک گربه",
      id : 3 ,
      price: 43000,
      image: "../../assets/images/d26e1ee6a0645cfbba8bdb98409527677fbc089a_1597160936.jpg" ,
      availablity: false ,
      information : "این محصول یک جای خواب نرم و گرم برای دوستان پشمالوشم که از جنس پنبه و خز بسیار لطیف تولید شده است دارای دیواره های بلند و ورودی کوتاه برای ورووج راحتر به همراه پارچه کف ترمزدار تشک جدا شونده و قابل شستشو"
    },
    {
      type: Ptype.food,
      name: "ظرف غذای گربه",
      id : 4 ,
      price: 43000,
      image: "../../assets/images/images.jpg" ,
      availablity: false ,
      information : "این محصول یک جای خواب نرم و گرم برای دوستان پشمالوشم که از جنس پنبه و خز بسیار لطیف تولید شده است دارای دیواره های بلند و ورودی کوتاه برای ورووج راحتر به همراه پارچه کف ترمزدار تشک جدا شونده و قابل شستشو"




    } ,]


}

import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/products';
import {Ptype} from '../app/interfaces/products';
@Injectable({
  providedIn: 'root'
})


export class ProductsService {


  constructor() { }

  static products:IProduct[]=[
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




    } ,

    {
      type: Ptype.scratcher,
      name: "اسکرچر گربه",
      id : 5 ,
      price: 43000,
      image: "../../assets/images/121999118.jpg" ,
      availablity: true ,
      information : "این محصول یک جای خواب نرم و گرم برای دوستان پشمالوشم که از جنس پنبه و خز بسیار لطیف تولید شده است دارای دیواره های بلند و ورودی کوتاه برای ورووج راحتر به همراه پارچه کف ترمزدار تشک جدا شونده و قابل شستشو"
    } ,
    {
      type: Ptype.food,
      name: "ظرف غذای گربه",
      id : 6 ,
      price: 43000,
      image: "../../assets/images/hhhh.jpg" ,
      availablity: true ,
      information : "این محصول یک جای خواب نرم و گرم برای دوستان پشمالوشم که از جنس پنبه و خز بسیار لطیف تولید شده است دارای دیواره های بلند و ورودی کوتاه برای ورووج راحتر به همراه پارچه کف ترمزدار تشک جدا شونده و قابل شستشو"
}
  ]
}




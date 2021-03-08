import { IProduct } from './../interfaces/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products:IProduct[]=[
    {
      name: "جای خواب گربه",
    id : 1 ,
    price: 43000,
    image: "../../assets/images/120173296.jpg" ,
    availablity: true ,
    information : "جای خواب گربه جای خواب گربه جای خواب گربه"
    } ,

    {
      name: "قلاده ی گربه",
      id : 2 ,
      price: 43000,
      image: "../../assets/images/4181.jpg" ,
      availablity: true ,
      information : "جای خواب گربه جای خواب گربه جای خواب گربه"
    },
    {
      name: "غذای خشک گربه",
      id : 3 ,
      price: 43000,
      image: "../../assets/images/d26e1ee6a0645cfbba8bdb98409527677fbc089a_1597160936.jpg" ,
      availablity: true ,
      information : "جای خواب گربه جای خواب گربه جای خواب گربه"
    }

  ];



}

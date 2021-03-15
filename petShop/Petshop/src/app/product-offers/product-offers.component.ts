import { ProductOfferService } from './../services/product-offer.service';
import { IProduct } from './../interfaces/products';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-offers',
  templateUrl: './product-offers.component.html',
  styleUrls: ['./product-offers.component.scss']
})
export class ProductOffersComponent implements OnInit {

  constructor() { }
  itemsPerSlide = 4;
  ngOnInit(): void {
  }

  productOffers :IProduct[] = ProductOfferService.ProductsOffers ;


}


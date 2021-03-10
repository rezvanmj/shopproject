import { ProductOfferService } from './../product-offer.service';
import { IProduct } from './../interfaces/products';
import { Component, OnInit } from '@angular/core';
declare var $: any;


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

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


  slides = [
    {image: '../../assets/images/120173296.jpg'},
    {image: '../../assets/images/120173296.jpg'},
    {image: '../../assets/images/120173296.jpg'},
    {image: '../../assets/images/120173296.jpg'},
    {image: '../../assets/images/120173296.jpg'},
    {image: '../../assets/images/120173296.jpg'},
    {image: '../../assets/images/120173296.jpg'},
    {image: '../../assets/images/120173296.jpg'},
  ];

}

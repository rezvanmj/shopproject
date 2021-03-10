import { ProductsService } from './../products.service';
import { HomeComponent } from './../home/home.component';
import { IProduct } from './../interfaces/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private activeRouter : ActivatedRoute ) { }
  product:IProduct ;
  ngOnInit(): void {

  this.product = ProductsService.products.find(product =>product.id == this.activeRouter.snapshot.params['id']);

  }





}

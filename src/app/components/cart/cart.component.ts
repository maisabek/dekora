import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public ProductService:ProductService) { }

  ngOnInit() {}

  removeFromCart(index){
    this.ProductService.removeFromCart(index)
  }
}

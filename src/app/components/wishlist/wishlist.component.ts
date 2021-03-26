import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
date=new Date()
  constructor(public ProductService:ProductService) { }

  ngOnInit() {
  }
  wishList:any
  pushWishList(wishList){
    this.ProductService.pushWishList(wishList)
  }

}

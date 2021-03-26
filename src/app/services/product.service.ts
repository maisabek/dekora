import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  cartSide="cartside"
  totalPrice:number=0
  getProduct():Observable<any>{
    //https://fakestoreapi.com/products
    return this.http.get(`assets/data/products.json`)
  }
  getProductById(id){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
  products=[]
  pushIntoCart(product){
   this.products.push(product)
  }
  removeFromCart(index:number){
    this.products.splice(index,1)
    this.quantity.splice(index,1)
  }
  quantity=[]
  pushQuantity(quantity){
    this.quantity.push(quantity)
  }
  wishlist=[]
  pushWishList(wishList){
   this.wishlist.push(wishList)
  }
  removeWishList(index){
    this.wishlist.splice(index,1)
  }
  categoryUrl:any='https://fakestoreapi.com/products/category'
  getCategoryByName(categoryName: string): Observable<any> {
    
      const urlOfCategory = `${this.categoryUrl}/${categoryName}`;
      return this.http.get<any>(urlOfCategory);
    }
}

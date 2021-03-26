import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.getId()
    this.getProduct()
    console.log("pro",this.product)
  }
  id:any
  getId(){
   this.activatedRoute.paramMap.subscribe((params)=>{
     this.id=params.get('id')
   })
  }
  products:any
  product=[]
  getProduct(){
  this.productService.getProductById(this.id).subscribe((data)=>{{
   this.products=data
   this.product.push(this.products)
  }})
  }
  quantity:number=1

  increase(){
   this.quantity+=1
  }  
  decrease(){
    this.quantity=this.quantity-1
    if(this.quantity <= 0){
      this.quantity=1
    }
  }
  pushquantity(){
   this.productService.pushQuantity(this.quantity)
  }
  pushIntoCart(product){
    this.productService.pushIntoCart(product)
    this.productService.totalPrice+=product.price * this.quantity
    }
    openSnacBar(){
      this.snackbar.open('check cart product added successfully','',{duration:1000})
    }

}

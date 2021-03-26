import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from 'src/app/services/product.service';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
   TemplateRef:TemplateRef<any>
  constructor(private ProductService:ProductService,
    private snackbar:MatSnackBar,private matDailog:MatDialog) { }

  ngOnInit() {
    this.getProducts()
    this.getCategory("electronics")
  }
  product:any[]
  getProducts(){
    this.ProductService.getProduct().subscribe((result)=>{
      this.product=result
    })
  }
  quantity:any
  categories=["electronics","jewelery","men clothing","women clothing"]
  pushIntoCart(product){
    this.ProductService.pushIntoCart(product)
  
    this.ProductService.totalPrice+=product.price * this.quantity
    }
    opensnackbar(){
      this.snackbar.open('check cart product addded successfully','',{duration:3000})
    }
    openDailog(template:TemplateRef<any>){
      this.matDailog.open(template)
    }
    closeDailog(){
      this.matDailog.closeAll()
    }
    pushquantity(quantity){
      this.ProductService.pushQuantity(quantity)
     }
     category:any
     getCategory(category){
      this.ProductService.getCategoryByName(category).subscribe((res)=>{
        this.category=res
        console.log("category",this.category)
      })
     }
}

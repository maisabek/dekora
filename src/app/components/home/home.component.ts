import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   
  constructor(private productService:ProductService,private MatDailog:MatDialog,
    private snackbar:MatSnackBar,private wowService: NgwWowService) {
        this.wowService.init();
    }

  ngOnInit() {
    this.NumOfItem = 4
    this.getProducts(this.NumOfItem)
    console.log("toast"+this.toast)

  }
  product:any[]
  quantityOfItem=[]
  NumOfItem:number=0
  productLength:number
  quantity:any
  toast:boolean=false

  getProducts(number){
   this.productService.getProduct().subscribe((result)=>{
    this.product=result
    // this.productLength=this.product.length
    this.product.splice(number)
   })
  }
  loadMore(){
    this.NumOfItem+=4
    this.getProducts(this.NumOfItem)
  }
  pushIntoCart(product){
  this.productService.pushIntoCart(product)

  this.productService.totalPrice+=product.price * this.quantity
  }
  openSnacBar(){
    this.snackbar.open('check cart product added successfully','',{duration:3000})
  }
  openDialog(templateRef:TemplateRef<any>){
    this.MatDailog.open(templateRef)
   }
   closeDailog(){
     this.MatDailog.closeAll()
   }
   pushquantity(quantity){
    this.productService.pushQuantity(quantity)
   }
   myOpts={
    duration: 100, // animation duration in seconds (2)
    useGrouping: true, // example: 1,000 vs 1000 (true)
    // useEasing: true, // ease animation (true)
    // smartEasingThreshold: 1000, // smooth easing for large numbers above this if useEasing (999)
    // smartEasingAmount: 1000 // amount to be eased for numbers above threshold (333)
  
   }
   myOpts2={
    duration: 100, // animation duration in seconds (2)
    useGrouping: true, // example: 1,000 vs 1000 (true)
    // useEasing: true, // ease animation (true)
    // smartEasingThreshold: 1000, // smooth easing for large numbers above this if useEasing (999)
    // smartEasingAmount: 1000 // amount to be eased for numbers above threshold (333)
  
   }
   myOpts3={
    duration: 500, // animation duration in seconds (2)
    useGrouping: true, // example: 1,000 vs 1000 (true)
    // useEasing: true, // ease animation (true)
    // smartEasingThreshold: 1000, // smooth easing for large numbers above this if useEasing (999)
    // smartEasingAmount: 1000 // amount to be eased for numbers above threshold (333)
  
   }
}

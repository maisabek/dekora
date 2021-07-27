import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {ProductService} from '../app/services/product.service'
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dekora';
  modalRef: BsModalRef;
  searchItem:string
  categories=["electronics","jewelery","men clothing","women clothing"]
  constructor(private modalService: BsModalService,
    public ProductService:ProductService,private MatDailog:MatDialog) {
   
  }
  ngOnInit(){
    this.getProduct()
    console.log("pro",this.product)
  }
  closeDialog(){
    this.MatDailog.closeAll()
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal(){
    this.modalRef.hide()
  }
 
  product:any[]
  getProduct(){
   this.ProductService.getProduct().subscribe((res)=>{
    this.product=res
    console.log("pro",this.product)

   })
  }

    @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 0) {
      document.getElementById('navbar').classList.add('pos');
    } else {
      document.getElementById('navbar').classList.remove('pos');

    }
  }
}

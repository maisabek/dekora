import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/pages/about/about.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {ContactComponent} from './components/pages/contact/contact.component'
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'detail/:id',component:ProductDetailsComponent},
  {path:'checkOut',component:CheckoutComponent},
  {path:'wishList',component:WishlistComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductsComponent,
   children:[
     {
    path:'detail/:id',component:ProductDetailsComponent
   }
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

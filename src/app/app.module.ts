import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'
import { NgxFontAwesomeModule } from 'ngx-font-awesome'
import {NgxTypedJsModule} from 'ngx-typed-js';
import {MatBadgeModule} from '@angular/material/badge';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CartComponent } from './components/cart/cart.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatSelectModule} from '@angular/material/select';
import { FilterDataPipe } from './pipes/filter-data.pipe';
import { MaterialModule } from './shared/material/material.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductsComponent } from './components/products/products.component';
import { NgwWowModule } from 'ngx-wow';
import { CounterModule } from 'ngx-counter';
import { CountUpModule } from 'ngx-countup';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CategoriesComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    FilterDataPipe,
    ProductDetailsComponent,
    CheckoutComponent,
    WishlistComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    NgxFontAwesomeModule,
    NgxTypedJsModule,
    
    HttpClientModule,
 
    ReactiveFormsModule,
    FormsModule,
    CountUpModule,

    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    
    MaterialModule,
    NgwWowModule,
    CounterModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

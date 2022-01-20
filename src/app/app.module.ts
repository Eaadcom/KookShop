import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/components/shop/shop.component';
import { HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/components/account/account.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/components/news/news.component';
import { Routes, RouterModule } from "@angular/router";
import { NewsitemComponent } from './news/components/newsitem/newsitem.component';
import { ShopitemComponent } from './shop/components/shopitem/shopitem.component';
import { RegisterComponent } from './account/components/register/register.component';
import { LoginComponent } from './account/components/login/login.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ManageAccountComponent } from './account/components/manage-account/manage-account.component';
import { ShoppingCartComponent } from './shopping-cart/components/shopping-cart/shopping-cart.component';
import { StorageService } from "./shared/services/storage.service";
import { CheckoutComponent } from './shopping-cart/components/checkout/checkout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    AccountComponent,
    HomeComponent,
    NewsComponent,
    NewsitemComponent,
    ShopitemComponent,
    RegisterComponent,
    LoginComponent,
    ManageAccountComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

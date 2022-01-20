import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../shared/services/storage.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: [] = [];
  checkingOut: boolean = false;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.shoppingCart = this.storageService.getShoppingCartFromLocalStorageAsArray();
  }

  addToCart(name: string){
    this.storageService.addToCart(name);
    this.shoppingCart = this.storageService.getShoppingCartFromLocalStorageAsArray();
  }

  removeFromCart(name: string){
    this.storageService.removeFromCart(name);
    this.shoppingCart = this.storageService.getShoppingCartFromLocalStorageAsArray();
  }

  shoppingCartEmpty(): boolean{
    return this.shoppingCart.length === 0;
  }

  checkout(){
    this.checkingOut = true;
  }

  loggedIn(): boolean{
    return this.storageService.isJwtInLocalstorage();
  }

}

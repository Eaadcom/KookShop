import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../shared/services/storage.service";
import {CheckoutService} from "../../services/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  shoppingCart: [] = [];
  payed: boolean = false;

  constructor(private storageService: StorageService,
              private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.shoppingCart = this.storageService.getShoppingCartFromLocalStorageAsArray();
  }

  handlePayment(){
    this.payed = true;
    this.checkoutService.shoppingCartToDB(this.shoppingCart).subscribe();
    this.storageService.emptyShoppingCart();
  }
}

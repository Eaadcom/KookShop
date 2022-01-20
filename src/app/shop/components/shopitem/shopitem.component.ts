import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {StorageService} from "../../../shared/services/storage.service";

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.scss']
})
export class ShopitemComponent implements OnInit {

  @Input() product: Product = {} as Product;
  imagePath = '';
  numberInCart: number = 0;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.imagePath = 'assets/products/' + this.product.previewImage;
    if (this.storageService.shoppingCartExistsInLocalStorage()){
      this.numberInCart = this.storageService.getProductAmount(<string>this.product.name);
    }
  }

  addToCart(){
    this.numberInCart++;
    this.storageService.addToCart(<string>this.product.name);
  }

  removeFromCart(){
    this.numberInCart--;
    this.storageService.removeFromCart(<string>this.product.name);
  }

  isInCart(){
    return this.numberInCart > 0;
  }
}


import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.scss']
})
export class ShopitemComponent implements OnInit {

  @Input() product: Product = {} as Product;
  imagePath = '';

  constructor() { }

  ngOnInit(): void {
    this.imagePath = 'assets/' + this.product.previewImage;
  }
}

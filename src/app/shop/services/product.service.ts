import {ApiService} from '../../shared/services/api.service';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly productsEndpoint;

  constructor(private api: ApiService) {
    this.productsEndpoint = 'products';
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.api.get(`${this.productsEndpoint}`);
  }
}

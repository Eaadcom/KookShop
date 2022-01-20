import {ApiService} from '../../shared/services/api.service';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {StorageService} from "../../shared/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private readonly shoppingEndpoint;

  constructor(private api: ApiService,
              private storageService: StorageService) {
    this.shoppingEndpoint = 'accountProducts';
  }

  shoppingCartToDB(shoppingCart: string[]): Observable<any>{
    return this.api.postAuthenticated(
      `${this.shoppingEndpoint}`, shoppingCart, `Bearer ${this.storageService.getJWTFromLocalStorage()}`);
  }
}

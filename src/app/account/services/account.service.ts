import {ApiService} from '../../shared/services/api.service';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {StorageService} from "../../shared/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly accountItemsEndpoint;

  constructor(private api: ApiService,
              private storageService: StorageService) {
    this.accountItemsEndpoint = 'accountProducts';
  }

  getAccountItems(): Observable<any>{
    return this.api.getAuthenticated(
      `${this.accountItemsEndpoint}`, `Bearer ${this.storageService.getJWTFromLocalStorage()}`);
  }
}

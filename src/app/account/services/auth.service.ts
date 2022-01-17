import {ApiService} from '../../shared/services/api.service';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Account} from "../models/account";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly registerEndpoint;
  private readonly loginEndpoint

  constructor(private api: ApiService) {
    this.registerEndpoint = 'register';
    this.loginEndpoint = 'login';
  }

  register(account: Account): Observable<Account>{
    return this.api.post(`${this.registerEndpoint}`, account);
  }

  login(account: Account): Observable<Account>{
    return this.api.post(`${this.loginEndpoint}`, account);
  }
}

import {ApiService} from '../../shared/services/api.service';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Account} from "../models/account";
import {LoginResponse} from "../models/loginResponse";
import {RegisterResponse} from "../models/registerResponse";

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

  register(account: Account): Observable<RegisterResponse>{
    return this.api.post(`${this.registerEndpoint}`, account);
  }

  login(account: Account): Observable<LoginResponse>{
    return this.api.post(`${this.loginEndpoint}`, account);
  }
}

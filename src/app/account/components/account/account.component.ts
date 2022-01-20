import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../shared/services/storage.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  loginMode: boolean = true;
  loggedIn: boolean = false;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  changeLoginMode(){
    this.loginMode = !this.loginMode;
  }

  changeLoginState(loginState: boolean){
    this.loggedIn = loginState;
  }

  JWTIsPresent(): boolean{
    return this.storageService.isJwtInLocalstorage();
  }

}

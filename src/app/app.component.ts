import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ApiService} from "./shared/services/api.service";
import {Account} from "./models/account"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ed\'s Shop';
  account = {} as Account;
  email = '';

  public constructor(private titleService: Title, private apiService: ApiService) {
    this.setTitle(this.title);
    this.testConnections();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public testConnections(){
    this.apiService.get('accounts/1').subscribe(response =>
    {
      this.account = response
      this.email = this.account.email!;
    });
  }
}

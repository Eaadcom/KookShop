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

  public constructor(private titleService: Title, private apiService: ApiService) {
    this.setTitle(this.title);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}

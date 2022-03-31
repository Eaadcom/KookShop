import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  ownedItems: any = [{}];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccountItems();
  }

  getAccountItems(){
    this.accountService.getAccountItems().subscribe((response => {
      this.ownedItems = response;
    }));
  }

}

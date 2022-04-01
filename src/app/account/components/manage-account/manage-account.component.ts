import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {map, catchError, of} from "rxjs";

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

  // getAccountItems(){
  //   this.accountService.getAccountItems().subscribe((response => {
  //     console.log(response.status)
  //     this.ownedItems = response;
  //   }));
  // }

  getAccountItems() {
    this.accountService.getAccountItems().pipe(
      map(response => {
        this.ownedItems = response;
      }), catchError(err => of(401))
    ).subscribe(x => {
      if(x == 401) {
        localStorage.removeItem("JWT");
      }
    })
  }
}

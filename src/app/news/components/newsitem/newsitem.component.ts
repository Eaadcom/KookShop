import {Component, Input, OnInit} from '@angular/core';
import {NewsItem} from "../../models/newsItem";

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.scss']
})
export class NewsitemComponent implements OnInit {

  @Input() newsItem: NewsItem = {} as NewsItem;
  imagePath = '';

  constructor() { }

  ngOnInit(): void {
    this.imagePath = 'assets/news/' + this.newsItem.image;
  }
}

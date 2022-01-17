import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import {NewsItem} from "../../models/newsItem";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsItems: NewsItem[] = [];

constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNewsItems();
  }

  getNewsItems(){
    this.newsService.getAllNewsItems().subscribe((response => {
      this.newsItems = response;
    }));
  }
}

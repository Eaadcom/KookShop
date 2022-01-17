import {ApiService} from '../../shared/services/api.service';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {NewsItem} from "../models/newsItem";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly newsEndpoint;

  constructor(private api: ApiService) {
    this.newsEndpoint = 'news';
  }

  getAllNewsItems(): Observable<Array<NewsItem>> {
    return this.api.get(`${this.newsEndpoint}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../apps/news/src/environments/environment';
import { Observable } from 'rxjs';
import { NewsArticle } from '../_models/news.interface';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<NewsArticle> {
    return this.http.get<NewsArticle>(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
    );
  }
}

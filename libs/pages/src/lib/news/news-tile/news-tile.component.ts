import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../_models/news.interface';

@Component({
  selector: 'german-news-tile',
  templateUrl: './news-tile.component.html',
  styleUrls: ['./news-tile.component.scss'],
})
export class NewsTileComponent implements OnInit {
  public newsArticleTile?: NewsArticle;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe((newsTile) => {
      this.newsArticleTile = newsTile;
      console.log(newsTile);
    });
  }
}

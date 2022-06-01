import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NewsTileComponent } from './news/news-tile/news-tile.component';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';

export const pagesRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NewsTileComponent,
    HomeComponent,
    NewsListComponent,
    NewsDetailsComponent,
  ],
  exports: [
    NewsTileComponent,
    HomeComponent,
    NewsListComponent,
    NewsDetailsComponent,
  ],
})
export class PagesModule {}

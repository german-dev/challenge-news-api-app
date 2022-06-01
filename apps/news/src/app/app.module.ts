import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from '@german/pages';
import { SharedUiModule } from 'shared-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsListingPage } from './news-listing';

@NgModule({
  declarations: [
    NewsListingPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsListingPage),
  ],
  exports: [
    NewsListingPage
  ]
})
export class NewsListingPageModule {}

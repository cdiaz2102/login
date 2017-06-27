import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewDetailPage } from './new-detail';

@NgModule({
  declarations: [
    NewDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NewDetailPage),
  ],
  exports: [
    NewDetailPage
  ]
})
export class NewDetailPageModule {}

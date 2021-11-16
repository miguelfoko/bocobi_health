import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoConsultationPage } from './video-consultation';

@NgModule({
  declarations: [
    VideoConsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoConsultationPage),
  ],
})
export class VideoConsultationPageModule {}

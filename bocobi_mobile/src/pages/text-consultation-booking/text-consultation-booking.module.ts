import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextConsultationBookingPage } from './text-consultation-booking';

@NgModule({
  declarations: [
    TextConsultationBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(TextConsultationBookingPage),
  ],
})
export class TextConsultationBookingPageModule {}

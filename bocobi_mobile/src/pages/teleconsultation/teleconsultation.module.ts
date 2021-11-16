import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeleconsultationPage } from './teleconsultation';

@NgModule({
  declarations: [
    TeleconsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(TeleconsultationPage),
  ],
})
export class TeleconsultationPageModule {}

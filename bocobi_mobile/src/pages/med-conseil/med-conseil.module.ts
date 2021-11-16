import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedConseilPage } from './med-conseil';

@NgModule({
  declarations: [
    MedConseilPage,
  ],
  imports: [
    IonicPageModule.forChild(MedConseilPage),
  ],
})
export class MedConseilPageModule {}

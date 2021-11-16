import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstPage } from './const';

@NgModule({
  declarations: [
    ConstPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstPage),
  ],
})
export class ConstPageModule {}

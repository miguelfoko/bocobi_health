import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConseilPage } from './conseil';

@NgModule({
  declarations: [
    ConseilPage,
  ],
  imports: [
    IonicPageModule.forChild(ConseilPage),
  ],
})
export class ConseilPageModule {}

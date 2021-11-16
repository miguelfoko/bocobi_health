import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaladiePage } from './maladie';

@NgModule({
  declarations: [
    MaladiePage,
  ],
  imports: [
    IonicPageModule.forChild(MaladiePage),
  ],
})
export class MaladiePageModule {}

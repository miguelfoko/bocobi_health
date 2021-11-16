import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicamentsPostPage } from './medicaments-post';

@NgModule({
  declarations: [
    MedicamentsPostPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicamentsPostPage),
  ],
})
export class MedicamentsPostPageModule {}

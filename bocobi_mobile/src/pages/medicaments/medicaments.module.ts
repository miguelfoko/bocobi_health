import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicamentsPage } from './medicaments';

@NgModule({
  declarations: [
    MedicamentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicamentsPage),
  ],
})
export class MedicamentsPageModule {}

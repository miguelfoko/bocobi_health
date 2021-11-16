import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedMedicamentsPage } from './med-medicaments';

@NgModule({
  declarations: [
    MedMedicamentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MedMedicamentsPage),
  ],
})
export class MedMedicamentsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedRendezVousPage } from './med-rendez-vous';

@NgModule({
  declarations: [
    MedRendezVousPage,
  ],
  imports: [
    IonicPageModule.forChild(MedRendezVousPage),
  ],
})
export class MedRendezVousPageModule {}

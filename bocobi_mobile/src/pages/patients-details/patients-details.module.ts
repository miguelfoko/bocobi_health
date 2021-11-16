import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientsDetailsPage } from './patients-details';

@NgModule({
  declarations: [
    PatientsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientsDetailsPage),
  ],
})
export class PatientsDetailsPageModule {}

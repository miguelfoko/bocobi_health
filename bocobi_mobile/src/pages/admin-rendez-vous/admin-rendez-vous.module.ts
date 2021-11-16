import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminRendezVousPage } from './admin-rendez-vous';

@NgModule({
  declarations: [
    AdminRendezVousPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminRendezVousPage),
  ],
})
export class AdminRendezVousPageModule {}

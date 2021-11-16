import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedFacturePage } from './med-facture';

@NgModule({
  declarations: [
    MedFacturePage,
  ],
  imports: [
    IonicPageModule.forChild(MedFacturePage),
  ],
})
export class MedFacturePageModule {}

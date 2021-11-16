import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlocPostDetailsPage } from './bloc-post-details';

@NgModule({
  declarations: [
    BlocPostDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BlocPostDetailsPage),
  ],
})
export class BlocPostDetailsPageModule {}

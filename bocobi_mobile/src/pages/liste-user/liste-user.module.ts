import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeUserPage } from './liste-user';

@NgModule({
  declarations: [
    ListeUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeUserPage),
  ],
})
export class ListeUserPageModule {}

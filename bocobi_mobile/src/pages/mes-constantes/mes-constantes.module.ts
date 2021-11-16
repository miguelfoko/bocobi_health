import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { MesConstantesPage } from './mes-constantes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MesConstantesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesConstantesPage),
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class MesConstantesPageModule {}

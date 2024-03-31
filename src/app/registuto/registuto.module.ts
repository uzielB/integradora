import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistutoPageRoutingModule } from './registuto-routing.module';

import { RegistutoPage } from './registuto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistutoPageRoutingModule
  ],
  declarations: [RegistutoPage]
})
export class RegistutoPageModule {}

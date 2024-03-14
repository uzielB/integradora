import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeportivaPageRoutingModule } from './deportiva-routing.module';

import { DeportivaPage } from './deportiva.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportivaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DeportivaPage]
})
export class DeportivaPageModule {}

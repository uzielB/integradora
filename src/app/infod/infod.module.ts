import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfodPageRoutingModule } from './infod-routing.module';

import { InfodPage } from './infod.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfodPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfodPage]
})
export class InfodPageModule {}

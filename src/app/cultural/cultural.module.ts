import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturalPageRoutingModule } from './cultural-routing.module';

import { CulturalPage } from './cultural.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CulturalPage]
})
export class CulturalPageModule {}

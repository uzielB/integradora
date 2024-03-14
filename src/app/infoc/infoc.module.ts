import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocPageRoutingModule } from './infoc-routing.module';

import { InfocPage } from './infoc.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfocPage]
})
export class InfocPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogadminPageRoutingModule } from './logadmin-routing.module';

import { LogadminPage } from './logadmin.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogadminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LogadminPage]
})
export class LogadminPageModule {}

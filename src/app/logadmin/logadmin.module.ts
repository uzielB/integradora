import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogadminPageRoutingModule } from './logadmin-routing.module';

import { LogadminPage } from './logadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogadminPageRoutingModule
  ],
  declarations: [LogadminPage]
})
export class LogadminPageModule {}

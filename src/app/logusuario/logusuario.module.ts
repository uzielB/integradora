import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogusuarioPageRoutingModule } from './logusuario-routing.module';

import { LogusuarioPage } from './logusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogusuarioPageRoutingModule
  ],
  declarations: [LogusuarioPage]
})
export class LogusuarioPageModule {}

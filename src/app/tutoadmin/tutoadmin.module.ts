import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutoadminPageRoutingModule } from './tutoadmin-routing.module';

import { TutoadminPage } from './tutoadmin.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutoadminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TutoadminPage]
})
export class TutoadminPageModule {}

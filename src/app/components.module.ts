import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { MenuadminComponent } from './components/menuadmin/menuadmin.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuadminComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    MenuadminComponent
    ]
})
export class ComponentsModule { }

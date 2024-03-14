import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfodPage } from './infod.page';

const routes: Routes = [
  {
    path: '',
    component: InfodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfodPageRoutingModule {}

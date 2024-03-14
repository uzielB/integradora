import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturalPage } from './cultural.page';

const routes: Routes = [
  {
    path: '',
    component: CulturalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturalPageRoutingModule {}

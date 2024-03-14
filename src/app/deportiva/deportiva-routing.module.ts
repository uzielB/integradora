import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeportivaPage } from './deportiva.page';

const routes: Routes = [
  {
    path: '',
    component: DeportivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeportivaPageRoutingModule {}
